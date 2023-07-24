import { Link } from "../Link";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>this is the home page</p>
      <Link to="/about">Ir a Sobre nosotros</Link>
    </>
  );
}
