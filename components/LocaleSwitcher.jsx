import { LocaleSwitcherSelect } from "./";
import { useEffect, useState } from "react";
import { SelectItem } from "./ui/";
import { useTranslation } from "react-i18next";

export default function LocaleSwitcher() {
  const { t, i18n } = useTranslation("global");
  const locale = i18n.language;

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
    <LocaleSwitcherSelect
      defaultValue={locale}
      label={t(`LocaleSwitcher.label${isXL ? "XL" : ""}`)}
    >
      <SelectItem
        key={"it"}
        value={"it"}
        className="bg-primary appearance-none hover:text-gray-700 hover:bg-white hover:border-blue-600 hover:outline-none"
      >
        {isXL ? "🇮🇹 Italiano" : "🇮🇹"}
      </SelectItem>
      <SelectItem
        key={"en"}
        value={"en"}
        className="bg-primary appearance-none hover:text-gray-700 hover:bg-white hover:border-blue-600 hover:outline-none"
      >
        {isXL ? "🇬🇧 English" : "🇬🇧"}
      </SelectItem>
    </LocaleSwitcherSelect>
  );
}
