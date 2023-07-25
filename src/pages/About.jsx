import { Link } from "../Link";

const i18n = {
  es: {
    title: "Acerca de",
    description: "esta es la página de acerca de",
    button: "Ir a Home",
  },
  en: {
    title: "About",
    description: "this is the about page",
    button: "Go to Home",
  },
};

const useI18n = (lang) => {
  console.log("lang", lang);
  return i18n[lang] || i18n.en;
};

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? "en");

  return (
    <>
      <h1>{i18n.title}</h1>
      <img
        src="https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg"
        alt=""
      />
      <p>{i18n.title}</p>
      <Link to="/">{i18n.button}</Link>
    </>
  );
}
