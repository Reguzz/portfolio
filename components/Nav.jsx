import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

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
  const locale = i18n.language;

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          to={`${locale}${link.path}`}
          key={index}
          className={`${
            pathname.pathname === `/${locale}${link.path}` &&
            "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {t("Nav." + link.name)}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
