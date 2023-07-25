import { useEffect, useState } from "react";
import { EVENTS } from "./consts";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Router from "./Router";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
];

function App() {
  return (
    <>
      <main>
        <Router routes={routes} defaultComponent={() => <h1>404</h1>} />
      </main>
    </>
  );
}

export default App;
