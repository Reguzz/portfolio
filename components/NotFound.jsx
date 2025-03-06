import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t, i18n } = useTranslation("global");
  const locale = i18n.language;

  return (
    <div className="flex flex-col items-center py-12 container mx-auto h-full gap-4 max-w-[500px]">
      <h1 className="text-4xl font-semibold">{t("NotFound.title")}</h1>
      <div className="flex flex-col items-start">
        <p className="text-white/60">{t("NotFound.description")}</p>
        <Link className="text-white/60 hover:text-accent" to={`/${locale}`}>
          {t("NotFound.action")}
        </Link>
      </div>
    </div>
  );
}
