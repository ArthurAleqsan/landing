import { FC } from "react";
import styles from "./styles.module.scss";
import FirstImg from "./../../assets/images/1.png";
import SecondImg from "./../../assets/images/2.png";
import cn from "classnames";

// TO DO goes from BE
const STATIC_DATA = [
  {
    title: "About Us",
    desc:
      "Greek Souvlaki Bar serving fresh gyros with flame grilled meats and fresh Mediterranean inspired fillings, wrapped in a fluffy pita.",
    img: FirstImg,
  },
  {
    title: "Buy 9 times and Get the 10th for FREE!",
    desc:
      "Order online today and Get 20% Discount on your first order through our website or app! Also buy 9 times and Get the 10th for FREE!",
    img: SecondImg,
  },
];

const About: FC= () => {
  return (
    <section className={styles.container} id = {'About'}>
      {STATIC_DATA.map((data: any, index: number) => {
        return (
          <div
            key={data.title}
            className={cn(styles.container__row, {
              [styles.container__row_reversed]: index % 2 !== 0,
            })}
          >
            <div
              className={styles.container__row__textWraper}
              // style={{ paddingBottom: index === 0 ? 120 : 0 }}
            >
              <h2 className={styles.container__row__textWraper__title}>
                {data.title}
              </h2>
              <h4 className={styles.container__row__textWraper__desc}>
                {data.desc}
              </h4>
            </div>
            <img src={data.img} alt={`image ${index + 1}`} />
          </div>
        );
      })}
      {/* <div className={styles.container__videoContainer}>
        <h1 className={styles.container__videoContainer__title}>
          How we do it
        </h1>
        <video
          width="100%"
          height="693px"
          x-webkit-airplay="allow"
          data-youtube-id="N9oxmRT2YWw"
          controls
          data-yt2html5="https://www.youtube.com/embed/tgbNymZ7vqY"
        />
      </div> */}
    </section>
  );
};

export default About;
