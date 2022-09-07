import styles from "./styles.module.scss";
import Image_1 from "./../../assets/images/images/1.png";
import Image_2 from "./../../assets/images/images/2.png";
import Image_3 from "./../../assets/images/images/3.png";
import Image_4 from "./../../assets/images/images/4.png";
import Image_5 from "./../../assets/images/images/5.png";
import Image_6 from "./../../assets/images/images/6.png";
import Image_7 from "./../../assets/images/images/7.png";
import Image_8 from "./../../assets/images/images/8.png";
import Image_9 from "./../../assets/images/images/9.png";
const _IMAGES = [
  Image_1,
  Image_2,
  Image_3,
  Image_4,
  Image_5,
  Image_6,
  Image_7,
  Image_8,
  Image_9,
];
const Images = () => {
  return (
    <section className={styles.container}>
      {_IMAGES.map((img) => {
        return (
          <figure key={img}>
            <img src={img} alt="Thumb" />
          </figure>
        );
      })}
    </section>
  );
};

export default Images;
