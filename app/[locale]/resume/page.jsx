"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaTelegram,
  FaGit,
  FaDocker,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTableau,
  SiQlik,
  SiNginx,
  SiMysql,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiFlask,
  SiVite,
} from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslations, useMessages } from "next-intl";

const icons = {
  html: <FaHtml5 />,
  css: <FaCss3 />,
  tailwind: <SiTailwindcss />,
  js: <FaJs />,
  node: <FaNodeJs />,
  react: <FaReact />,
  typescript: <SiTypescript />,
  vite: <SiVite />,
  next: <SiNextdotjs />,
  express: <SiExpress />,
  flask: <SiFlask />,
  mongodb: <SiMongodb />,
  mysql: <SiMysql />,
  docker: <FaDocker />,
  nginx: <SiNginx />,
  git: <FaGit />,
  qlik: <SiQlik />,
  tableau: <SiTableau />,
  telegram: <FaTelegram />,
  whatsapp: <FaWhatsapp />,
};

const Resume = () => {
  const t = useTranslations("Resume");
  const messages = useMessages();

  const itemsExp = messages.Resume.experience.items;
  const itemsEdu = messages.Resume.education.items;
  const itemsSkills = messages.Resume.skills.items;
  const itemsAboutme = messages.Resume.info;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className=" min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">{t("list.experience")}</TabsTrigger>
            <TabsTrigger value="education">{t("list.education")}</TabsTrigger>
            <TabsTrigger value="skills">{t("list.skills")}</TabsTrigger>
            <TabsTrigger value="aboutme">{t("list.aboutme")}</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{t("experience.title")}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t("experience.description")}
                </p>
                <ScrollArea className="h-[500px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {itemsExp.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col items-center justify-start lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.period}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{t("education.title")}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t("education.description")}
                </p>
                <ScrollArea className="h-[500px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {itemsEdu.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329]  py-6 px-10 rounded-xl flex flex-col items-center justify-start lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.period}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{t("skills.title")}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {t("skills.description")}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {itemsSkills.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="group bg-[#232339] w-full h-[150px] rounded-xl flex items-center justify-center">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {icons[skill.icon]}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="capitalize">
                            {skill.name}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="aboutme"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{t("aboutme.title")}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t("aboutme.description")}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {itemsAboutme.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.title}</span>
                      {item.title === "Email" ? (
                        <span className="text-xl" href={`mailto:${item.value}`}>
                          {item.value}
                        </span>
                      ) : (
                        <span className="text-xl">{item.value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Resume;
