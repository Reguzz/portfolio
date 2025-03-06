import {Link} from "react-router-dom";
import { Nav, MobileNav, LocaleSwitcher } from "./";
import { useTranslation } from "react-i18next";

// const texts = ["developer", "creator", "thinker", "problem solver"];

const Header = () => {
  const { i18n } = useTranslation();
  const locale = i18n.language;
  
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to={`/${locale}`}>
          <h1 className="text-4xl font-semibold ">
            Fabrizio<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>
        <div className="flex items-center gap-2 ">
          <LocaleSwitcher />
          {/* mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
