import { useEffect } from "react";

export default function SearchPage({ routeParams }) {
  useEffect(() => {
    document.title = `Search: ${routeParams.query}`;
  }, [routeParams]);

  return (
    <>
      <h1>Search</h1>
      <p>your search was {routeParams.query}</p>
    </>
  );
}
