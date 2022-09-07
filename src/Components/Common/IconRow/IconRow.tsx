import { FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

type Props = {
  icon: string;
  text: string;
  size?: "sm" | "lg";
  withBorder?: boolean; 
};
const IconRow: FC<Props> = ({ icon, text, size = "sm", withBorder = false }) => {
  return (
    <div className={cn(styles.container, {
        [styles[`container__withBorder`]]: withBorder,
    })}>
      <img src={icon} alt="icon" className={styles.container__icon} />
      <span
        className={cn(styles.container__text, {
          [styles[`container__text__${size}`]]: size,
        })}
      >
        {text}
      </span>
    </div>
  );
};

export default IconRow;
