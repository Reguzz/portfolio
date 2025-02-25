'use client';

import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "@/components/Nav";
import MobileNav from "./MobileNav";
import LocaleSwitcher from "./LocaleSwitcher";
import { useLocale } from "next-intl";

const texts = ["developer", "creator", "thinker", "problem solver"];

const Header = () => {
  const locale = useLocale();
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={`/${locale}`}>
          <h1 className="text-4xl font-semibold ">
            Fabrizio<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={`/${locale}/contact`}>
            <Button>Contact me</Button>
          </Link>
        </div>
        <div className="flex items-center ">
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
