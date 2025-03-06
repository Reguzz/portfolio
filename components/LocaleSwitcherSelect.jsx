import { useEffect, useState } from "react";
import { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}) {
  const [isPending, startTransition] = useTransition();
  const { i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const { lang } = useParams();

  function onSelectChange(value) {
    startTransition(() => {
      i18n.changeLanguage(value);
    }); 
    console.log(window.location.hash)
    const currentHash = window.location.hash;
    const newHash = currentHash.replace(/#\/[^/]+/, `#/${value}`);
    window.location.hash = newHash;
  }

  useEffect(() => {
    setSelectedOption(lang);
  }, [lang]);

  return (
    <Select
      value={selectedOption}
      onValueChange={(value) => {
        setSelectedOption(value);
        onSelectChange(value);
      }}
      disabled={isPending}
    >
      <SelectTrigger className="w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {children}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
