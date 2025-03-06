import { useState } from "react";
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

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}) {
  const [isPending, startTransition] = useTransition();
  const { i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  function onSelectChange(value) {
    startTransition(() => {
      i18n.changeLanguage(value);
    });
  }

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
