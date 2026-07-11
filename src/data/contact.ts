import { LuMail } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  // icon: LucideIcon;
};

export const contactLinks = [
  {
    label: "Email",
    value: "coding.toye@gmail.com",
    href: "mailto:coding.toye@gmail.com",
    icon: LuMail,
  },
  {
    label: "GitHub",
    value: "github.com/codingtoye",
    href: "https://github.com/codingtoye",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nicktoye",
    href: "https://linkedin.com/in/nicktoye",
    icon: FaLinkedin,
  },
];
