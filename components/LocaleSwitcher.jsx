"use client";

import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { useEffect, useState } from "react";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  const [isXL, setIsXL] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1200px)");
    const handleMediaQueryChange = (event) => {
      setIsXL(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Set initial value
    setIsXL(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur} className="bg-primary appearance-none hover:text-gray-700 hover:bg-white hover:border-blue-600 hover:outline-none">
          {isXL ? t("localeXL", { locale: cur }) : t("locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
