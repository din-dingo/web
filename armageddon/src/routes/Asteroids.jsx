import {Header} from "../components/header/Header";
import {Card} from "../components/card/Card";
import {useState} from "react"
import styles from "./style.module.css";

export const Asteroids = ()=>{
    const [asteroids] = useState(generate())

    const [onlyDangerous, setOnlyDangerous] = useState(false)

    const [mode, changeMode] = useState(false)

    return <div>
        <Header/>
        <div className={styles.menu} onChange={()=>setOnlyDangerous(!onlyDangerous)}>
            <div>
                <input type="checkbox" value={onlyDangerous}></input>Показать только опасные
            </div>
            <div>
                Расстояние
                <button onClick={()=>changeMode(false)}>в километрах</button>
                <button onClick={()=>changeMode(true)}>в дистанциях до Луны</button>
            </div>
        </div>
        {onlyDangerous ?
        asteroids.filter((item)=>item.isDangerous).map((item)=><Card {...item} mode = {mode}/>) :
        asteroids.map((item)=><Card {...item} mode = {mode}/>)}
    </div>
}

const generate = ()=> {
    const months = [
        "января", 
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
    ]
    const characters = "QWERTYUIOPASDFGHJKLZXCVBNM"
    const result = []

    for (let i = 0; i < 5; i++) {
        let name = "2024 ";
        for (let j = 0; j < 4; j++) {
            name += characters[(Math.random()*25).toFixed(0)]
        }
        const date = `${(Math.random()*27 + 1).toFixed(0)}.${(Math.random()*11 + 1).toFixed(0)}.2024`
        const size = (Math.random()*100 + 1).toFixed(0)
        const distance = (Math.random()*100000000).toFixed(0)
        const isDangerous = Math.random() >= 0.5
        result.push({name, date, size, distance, isDangerous})
    }
    return result
}