import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Reguzz" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/fabrizio-reguzzi/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((social, index) => (
        <Link className={`${iconStyles}`} href={social.path} key={index}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
