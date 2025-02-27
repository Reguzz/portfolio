"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const info = [
  // {
  //   icon: <FaPhoneAlt />,
  //   title: "phone",
  //   description: "(+39) 389 2958220",
  // },
  {
    icon: <FaEnvelope />,
    title: "email",
    description: "fabrizio.reguzzi@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "address",
    description: "Bergamo, Italy",
  },
];

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">{t("title")}</h3>
              <p className="text-white/60">{t("description")}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder={`${t("form.firstname")}`}
                />
                <Input type="lastname" placeholder={`${t("form.lastname")}`} />
                <Input type="email" placeholder={`${t("form.email")}`} />
                <Input type="phone" placeholder={`${t("form.phone")}`} />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={`${t("form.services.label")}`}
                  ></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{t("form.services.label")}</SelectLabel>
                    <SelectItem value="web">
                      {t("form.services.web")}
                    </SelectItem>
                    <SelectItem value="telegram">
                      {t("form.services.telegram")}
                    </SelectItem>
                    <SelectItem value="webdev">
                      {t("form.services.webdev")}
                    </SelectItem>
                    <SelectItem value="API">
                      {t("form.services.api")}
                    </SelectItem>
                    <SelectItem value="other">
                      {t("form.services.other")}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                placeholder={`${t("form.message")}`}
                className="h-[200px]"
              />
              <Button size="md" className="max-w-40">
                {t("form.submit")}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex gap-6 items-center">
                  <div className="flex items-center justify-center w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className=" text-white/60">
                      {t(`info.${item.title}`)}
                    </h4>
                    {item.title === "email" ? (
                      <a className="text-xl" href={`mailto:${item.description}`}>
                        {item.description}
                      </a>
                    ) : (
                      <p className="text-xl">{item.description}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
