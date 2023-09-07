import {Person} from "../../api";
import style from './PersonItem.module.css';

type Props = {
    person: Person
}

export const PersonItem: React.FC<Props> = ({person}) => {
    return <div className={style.card}>
        <img className={style.img} src={person.image}></img>
        <p>{person.name}</p>
    </div>
}
