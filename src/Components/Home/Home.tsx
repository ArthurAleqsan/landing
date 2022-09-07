import { FC } from "react";
import HomeImg from "./../../assets/images/Home.png";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

type Props = {
  primary_color: string;
  logo: string;
};

const Home: FC<Props> = ({ primary_color, logo }) => {
  return (
    <section className={styles.container} id="Home">
      <img
        src={HomeImg}
        alt="Home Section"
        className={styles.container__background}
      />
            <Link to="/" className={styles.container__logo}>
        <img src={logo} alt="Bada Bing!" />
      </Link>
      <div className={styles.container__frontWrapper}>
        <div className={styles.container__frontWrapper__textWrapper}>
          <h1>Yeeros, all about giros</h1>
          <h5>Experts in greek food</h5>
        </div>
        <Link to="/order.html#/order" target = '_blank'>
          <button style={{ background: primary_color }}>Order online</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
