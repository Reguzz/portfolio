"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const links = [
  {
    name: "home",
    path: "/",
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

const Nav = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Nav");
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
        href={`/${locale}${link.path}`}
          key={index}
          className={`${
            pathname === "/" + locale + link.path && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {t(link.name)}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
