import styles from "./styles.module.scss";
import FB from "./../../assets/icons/fb.svg";
import IG from "./../../assets/icons/ig.svg";
import Youtube from "./../../assets/icons/yt.svg";
import Twitter from "./../../assets/icons/tw.svg";
import { FC } from "react";

const SOCIALS = [
  {
    icon: FB,
    link: "/",
    alt: "facebook",
  },
  {
    icon: IG,
    link: "/",
    alt: "instagram",
  },
  {
    icon: Youtube,
    link: "/",
    alt: "youtube",
  },
  {
    icon: Twitter,
    link: "/",
    alt: "twitter",
  },
];
type Props = {
  socialLinks: any;
  name: string;
};

const Footer: FC<Props> = ({ socialLinks, name }) => {
  return (
    <footer className={styles.container}>
      <div className={styles.container__iconsContainer}>
        {SOCIALS.map((item) => {
          const name: string = item.alt;
          return (
            <a key={item.alt} href={socialLinks[name]} target="_blank">
              <img src={item.icon} />
            </a>
          );
        })}
      </div>
      <div className={styles.container__copyrightContainer}>
        <span>&copy; {name},{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
