import styles from "./Card.module.css";
import asteroid from "./asteroid.svg";

export const Card = (props)=>{
    const {name, date, distance, size, isDangerous, mode} = props;

    return <div className={`${isDangerous ? styles.red : styles.green} ${styles.container}`}>
        <div className={styles.image}>
            <img src={asteroid} alt="asteroid"/>
        </div>
        <div>
            <div className={styles.bold}>{name}</div>
            <div className={styles.data}>
                <div>Дата: {date}</div>
                <div>Размер: {size} м</div>
                <div>Расстояние: {mode ? distance.lunar : Math.round(distance.kilometers)} {mode ? " дистанций до луны" : " км"}</div>
            </div>
        </div>

        <div className={styles.hazard}>
            <div>Оценка: {isDangerous ? "опасен" : "не опасен"}</div>
            <button className={styles.button}>
                На уничтожение
            </button>
        </div>
    </div>
}