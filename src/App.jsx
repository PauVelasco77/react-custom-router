import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Router from "./Router";
import SearchPage from "./pages/Search";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/search/:query",
    component: SearchPage,
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
