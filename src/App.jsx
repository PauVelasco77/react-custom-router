import { useEffect, useState } from "react";
import { EVENTS } from "./consts";

function navigate(href) {
  window.history.pushState({}, "", href);
  // create personalized event
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  // dispatch event
  window.dispatchEvent(navigationEvent);
}

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>this is the home page</p>
      <button onClick={() => navigate("/about")}>Ir a Sobre nosotros</button>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>this is the about page</p>
      <button onClick={() => navigate("/")}>Ir a Home</button>
    </>
  );
}

function App() {
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

  return (
    <>
      <main>
        {currentPath === "/" && <HomePage />}
        {currentPath === "/about" && <AboutPage />}
      </main>
    </>
  );
}

export default App;
