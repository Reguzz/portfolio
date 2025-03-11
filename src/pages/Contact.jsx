import {
  Button,
  Input,
  Textarea,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui";

import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const info = [
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
  const { t, i18n } = useTranslation("global");
  const { lang } = useParams();
  const [err, setErr] = useState({});

  useEffect(() => {
    document.title = t("Contact.title");
  }, [i18n.language, lang]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const info = t("Resume.info");
    const toEmail = info.filter((el) => el.title === "Email")[0].value;
    const form = e.target.form;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    const { firstname, lastname, email, phone, service, message } = formValues;

    let newErr = {};

    if (!firstname || firstname.length < 1) {
      newErr = { ...newErr, firstname: "required" };
    }
    if (!lastname || lastname.length < 1) {
      newErr = { ...newErr, lastname: "required" };
    }
    if (!email || email.length < 1) {
      newErr = { ...newErr, email: "required" };
    }
    if (!service || service.length < 1) {
      newErr = { ...newErr, service: "required" };
    }
    console.log(err);

    if (Object.keys(newErr).length > 0) {
      setErr(newErr);
      return;
    }

    const subject = `Richiesta informazioni`;
    const body = encodeURI(
      `Buongiorno Fabrizio,\nsono ${firstname} ${lastname} e ti scrivo per chiederti informazioni riguardo al servizio di ${service}.\n\n${message}\n\nPuoi contattarmi al seguente indirizzo email: ${email} ${
        phone && "oppure al numero di telefono:" + phone
      }`
    );
    window.open(`mailto:${toEmail}?subject=${subject}&body=${body}`, "_blank");
    window.location.reload();
    setErr({});
  };

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
          <div className="xl:h-[54%] order-2 xl:order-none mb-10 xl:mb-0">
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">{t("Contact.title")}</h3>
              <p className="text-white/60">{t("Contact.description")}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  name="firstname"
                  placeholder={`${t("Contact.form.firstname")}`}
                  className={err.firstname && "border-red-500"}
                />
                <Input
                  type="lastname"
                  name="lastname"
                  placeholder={`${t("Contact.form.lastname")}`}
                  className={err.lastname && "border-red-500"}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder={`${t("Contact.form.email")}`}
                  className={err.email && "border-red-500"}
                />
                <Input
                  type="phone"
                  name="phone"
                  placeholder={`${t("Contact.form.phone")}`}
                />
              </div>
              <Select name="service">
                <SelectTrigger
                  className={`w-full ${err.service && "border-red-500"}`}
                >
                  <SelectValue
                    placeholder={`${t("Contact.form.services.label")}`}
                  ></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>
                      {t("Contact.form.services.label")}
                    </SelectLabel>
                    <SelectItem value="web">
                      {t("Contact.form.services.web")}
                    </SelectItem>
                    <SelectItem value="telegram">
                      {t("Contact.form.services.telegram")}
                    </SelectItem>
                    <SelectItem value="webdev">
                      {t("Contact.form.services.webdev")}
                    </SelectItem>
                    <SelectItem value="API">
                      {t("Contact.form.services.api")}
                    </SelectItem>
                    <SelectItem value="other">
                      {t("Contact.form.services.other")}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                placeholder={`${t("Contact.form.message")}`}
                className="h-[200px]"
              />

              <Button size="md" className="max-w-40" onClick={handleFormSubmit}>
                {t("Contact.form.submit")}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex gap-6 items-center">
                  <div className="flex items-center justify-center w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent </li>rounded-md">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className=" text-white/60">
                      {t(`Contact.info.${item.title}`)}
                    </h4>
                    {item.title === "email" ? (
                      <a
                        className="text-xl"
                        href={`mailto:${item.description}`}
                      >
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
