import { Suspense, lazy } from "react";
import Route from "./Route";
import Router from "./Router";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";

const LazyAboutPage = lazy(() => import("./pages/About"));

const routes = [
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <>
      <main>
        <Suspense fallback={<h1>LOADING</h1>}>
          <Router routes={routes} defaultComponent={() => <h1>404</h1>}>
            <Route path="/" Component={HomePage} />
            <Route path="/about" Component={LazyAboutPage} />
          </Router>
        </Suspense>
      </main>
    </>
  );
}

export default App;
