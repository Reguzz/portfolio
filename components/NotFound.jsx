import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function NotFoundPage(params) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "NotFound" });
  //   const t = await getTranslations({ locale, namespace: "NotFoundPage" });

  return (
    <div className="flex flex-col items-center py-12 container mx-auto h-full gap-4 max-w-[500px]">
      <h1 className="text-4xl font-semibold">{t("title")}</h1>
      <div className="flex flex-col items-start">
        <p className="text-white/60">{t("description")}</p>
        <Link className="text-white/60 hover:text-accent" href={`/${locale}`}>
          {t("action")}
        </Link>
      </div>
    </div>
  );
}
