import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui";
import { Link, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { useTranslation } from "react-i18next";

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
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const { t, i18n } = useTranslation("global");
  const locale = i18n.language;
  const pathname = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen}>
      <SheetTrigger
        className="flex justify-center items-center"
        onClick={() => setIsOpen(true)}
      >
        <CiMenuFries className="text-3xl text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col" onClick={() => setIsOpen(false)}>
        <div className="mt-[100px] mb-[60px] md:mt-32 md:mb-40 text-center text-2xl">
          <SheetHeader className={"hidden"}>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <Link to={`/${locale}`}>
            <h1 className="text-4xl font-semibold">
              Fabrizio<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => (
            <Link
              to={`/${locale}${link.path}`}
              key={index}
              className={`${
                pathname.pathname === `/${locale}${link.path}` &&
                "text-accent border-b-2 border-accent"
              } capitalize text-xl font-medium hover:text-accent transition-all`}
            >
              {t("MobileNav." + link.name)}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
