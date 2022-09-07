import styles from './styles.module.scss';
const Loader = () => {
    return <div className = {styles.container}>
        <div className={styles["lds-hourglass"]} />
    </div>
};

export default Loader;