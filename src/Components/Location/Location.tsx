import IconRow from "../Common/IconRow";
import styles from "./styles.module.scss";
import Icon from "./../../assets/icons/map.svg";

const Location = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.container__title}>Locations</h1>
      <div className={styles.container__locationsContainer}>
        <div className={styles.container__locationsContainer__block}>
          <IconRow text="19 Prospect Road, Drumcondra, D09 F9N4" icon={Icon} withBorder />
          <IconRow text="19 Prospect Road, Drumcondra, D09 F9N4" icon={Icon} withBorder />
          <IconRow
            text="19 Prospect Road, Drumcondra, D09 F9N4"
            icon={Icon}
            withBorder
          />
        </div>
        <div className={styles.container__locationsContainer__block}>
          <IconRow
            text="19 Prospect Road, Drumcondra, D09 F9N4"
            icon={Icon}
            withBorder
          />
          <IconRow
            text="19 Prospect Road, Drumcondra, D09 F9N4"
            icon={Icon}
            withBorder
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
