import logo from "../../assets/ram.png";
import style from './Home.module.css';
import {Persons} from "../../components/Persons/Persons.tsx";

export const Home = () => {
    return <div className={style.wrapper}>
        <img src={logo} className={style.logo} alt="Vite logo"/>
        <div className={style.divider}></div>
        <Persons/>
    </div>
}
