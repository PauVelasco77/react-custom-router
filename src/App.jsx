import Route from "./Route";
import Router from "./Router";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";

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
        <Router routes={routes} defaultComponent={() => <h1>404</h1>}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
        </Router>
      </main>
    </>
  );
}

export default App;
