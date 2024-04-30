import {Link} from "react-router-dom";
import styles from "./Header.module.css";
import Rectangle_1 from "./Rectangle1.svg";

export const Header = ()=>{
    return <div>
        <div className={styles.container}>
            <div>
                <h1>ARMAGEDDON V</h1>
                <div>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</div>
            </div>
            <div>
                <button>
                    <Link to={`/asteroids`}>Астероиды</Link>
                </button>
                <button>
                    <Link to={`/destroyment`}>Уничтожение</Link>
                </button>
            </div>
        </div>
        <div>
            <img src={Rectangle_1} alt="Rectangle"/>
        </div>
    </div>
    
}