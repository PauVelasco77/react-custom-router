import { useEffect, useState } from "react";
import { EVENTS } from "./consts";
import { match } from "path-to-regexp";

export default function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => null,
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true;

    // we're usint path-to-regexp to get dynamic routes
    // /search/:query <- this is a dynamic route

    const matcherUrl = match(path, { decode: decodeURIComponent });
    const matched = matcherUrl(currentPath);

    if (!matched) return false;

    // save the route params
    // /search/this-is-a-query <- this is the current path
    // { query: "this-is-a-query" } <- this is the route params
    routeParams = matched.params; // { query: "search" }
    return true;
  })?.component;

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  );
}
