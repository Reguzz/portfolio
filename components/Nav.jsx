import { useTranslation } from "react-i18next";
import { Link, useLocation, useParams } from "react-router-dom";
import { Button } from "./ui/";

const links = [
  {
    name: "home",
    path: "",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
];

const Nav = () => {
  const pathname = useLocation();
  const { t, i18n } = useTranslation("global");
  const { lang } = useParams();
  const locale = i18n.language;

  return (
    <>
      <nav className="flex gap-8">
        {links.map((link, index) => (
          <Link
            to={`${lang}${link.path}`}
            key={index}
            className={`${
              pathname.pathname === `/${lang}${link.path}` &&
              "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {t("Nav." + link.name)}
          </Link>
        ))}
      </nav>
      <Link to={`/${locale}/contact`}>
        <Button>{t("Nav.contact")}</Button>
      </Link>
    </>
  );
};

export default Nav;
