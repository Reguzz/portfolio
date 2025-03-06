import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const stats = [
  { num: 4, text: "years" },
  { num: 5, text: "projects" },
  { num: 8, text: "technologies" },
  { num: 500, text: "commits" },
];

const Stats = () => {
  const { t } = useTranslation("global");
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-1 justify-center items-center gap-4 xl:justify-start"
            >
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {t("Stats." + stat.text)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
