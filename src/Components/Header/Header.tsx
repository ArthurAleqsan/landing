import styles from "./styles.module.scss";
import Logo from "./../../assets/images/Logo.svg";
import Burger from "./../../assets/icons/burger.svg";
import Close from "./../../assets/icons/close.svg";
import { FC, useState } from "react";
import cn from "classnames";
import { Link, useLocation, useNavigate } from "react-router-dom";

type Props = {
  handleScroll: (key: string) => void;
  primary_color: string;
  secondary_color: string;
  logo: string;
};

const Header: FC<Props> = ({
  handleScroll,
  primary_color,
  secondary_color,
  logo,
}) => {
  const [active, setActive] = useState<string>("Home");
  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState<boolean>(false);
  const NAVIGATION_KEYS = ["Home", "About", "Contact"];
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleNavigate = (key: string): void => {
    setActive(key);
    if (pathname.includes("orders")) {
      const url = key === "Home" ? "/" : `/#${key}`;
      navigate(url);
    }
    handleScroll(key);
    if (isBurgerMenuActive) {
      setIsBurgerMenuActive(false);
    }
  };
  const toggleMenu = () => {
    setIsBurgerMenuActive(!isBurgerMenuActive);
  };
  return (
    <header className={styles.container}>
      <div className={styles.container__burger}>
        <img src={Burger} alt="burger-menu" onClick={toggleMenu} />
        {isBurgerMenuActive && (
          <div className={styles.container__burger__navigation}>
            <img
              src={Close}
              alt="close"
              className={styles.container__burger__navigation__close}
              onClick={toggleMenu}
            />
            {NAVIGATION_KEYS.map((key) => {
              return (
                <span
                  key={key}
                  className={cn(styles.container__navigation__item, {
                    [styles.container__navigation__item_active]: active === key,
                  })}
                  style={
                    active === key
                      ? { color: primary_color, background: secondary_color }
                      : {}
                  }
                  onClick={() => handleNavigate(key)}
                >
                  {key}
                </span>
              );
            })}
            <Link to="/order.html#/order" target="_blank">
              <button
                className={styles.button}
                style={{ background: primary_color }}
              >
                Order online
              </button>
            </Link>
          </div>
        )}
      </div>
      <Link to="/" className={styles.container__logo}>
        <img src={logo} alt="Bada Bing!" />
      </Link>
      <div className={styles.container__navigation}>
        {NAVIGATION_KEYS.map((key) => {
          return (
            <span
              key={key}
              className={cn(styles.container__navigation__item, {
                [styles.container__navigation__item_active]: active === key,
              })}
              style={
                active === key
                  ? { color: primary_color, background: secondary_color }
                  : {}
              }
              onClick={() => handleNavigate(key)}
            >
              {key}
            </span>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
