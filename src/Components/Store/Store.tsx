import styles from "./styles.module.scss";
import PlayMarket from "./../../assets/images/PlayMarket.svg";
import AppStore from "./../../assets/images/AppStore.svg";
import { FC } from "react";

type Props = {
  links: {
    app_store_link: string;
    play_store_link: string;
  }
};

const Store: FC<Props> = ({ links }) => {
  return (
    <section className={styles.container}>
      <div className={styles.container__textBox}>
        <h1 className={styles.container__textBox__title}>
          Download the free app
        </h1>
        <h5 className={styles.container__textBox__desc}>
          Get our new app on your device and order your favourites faster than
          ever.
        </h5>
      </div>
      <div className={styles.container__buttons}>
        <a target="_blank" href={links.play_store_link}>
          <img src={PlayMarket} alt="Play market" />
        </a>
        <a target="_blank" href={links.app_store_link}>
          <img src={AppStore} alt="App store" />
        </a>
      </div>
    </section>
  );
};
export default Store;
