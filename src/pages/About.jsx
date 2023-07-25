import { Link } from "../Link";

console.log("About");

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <img
        src="https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg"
        alt=""
      />
      <p>this is the about page</p>
      <Link to="/">Ir a Home</Link>
    </>
  );
}
