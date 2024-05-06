import {Header} from "../components/header/Header";
import {Card} from "../components/card/Card";
import {useEffect, useState} from "react"
import styles from "./style.module.css";

export const Asteroids = ()=>{
    const [asteroids, setAsteroids] = useState([])

    const [onlyDangerous, setOnlyDangerous] = useState(false)

    const [mode, changeMode] = useState(false)

    useEffect(()=>{
        const result = fetch("https://api.nasa.gov/neo/rest/v1/feed?api_key=" + process.env.REACT_APP_API_KEY).then((response)=>{
            return response.json()}).then((response)=>{
            let rawAsteroids = []
            for (const data in response.near_earth_objects) {
                rawAsteroids = rawAsteroids.concat(response.near_earth_objects[data])
            }
            const asteroids = rawAsteroids.map(item=>{
                const size = Math.trunc((item.estimated_diameter.meters.estimated_diameter_max + item.estimated_diameter.meters.estimated_diameter_min) / 2)
                const close = item.close_approach_data[0]
                return {
                    name: item.name,
                    date: close.close_approach_date,
                    size: size,
                    distance: {kilometers: close.miss_distance.kilometers, lunar: close.miss_distance.lunar},
                    isDangerous: item.is_potentially_hazardous_asteroid,
                    id: item.id
                }
            })
            setAsteroids(asteroids)
        })
    }, [])

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
        asteroids.filter((item)=>item.isDangerous).map((item)=><Card key={item.id} {...item} mode = {mode}/>) :
        asteroids.map((item)=><Card key={item.id} {...item} mode = {mode}/>)}
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
        result.push({name, date, size, distance, isDangerous, id: name})
    }
    return result
}