import { Suspense, lazy } from "react";
import Route from "./Route";
import Router from "./Router";
import HomePage from "./pages/Home";

const LazyAboutPage = lazy(() => import("./pages/About.jsx"));
const LazySearchPage = lazy(() => import("./pages/Search.jsx"));

const routes = [
  {
    path: "/search/:query",
    Component: LazySearchPage,
  },
  {
    path: "/:lang/about",
    Component: LazyAboutPage,
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
