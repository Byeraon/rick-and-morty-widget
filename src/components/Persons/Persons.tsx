import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUsers, Person} from "../../api";
import style from './Persons.module.css';
import {PersonItem} from "../PersonItem";


export const Persons = () => {
    const [data, setData] = useState<null | Person[]>(null)
    const [ids, setIds] = useState<number[]>([])
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const result = searchParams.get('ids')?.split(',').map(val => Number(val));
        if (result) {
            setIds(result)
        }
    }, [searchParams])

    useEffect(() => {
        (async () => {
            if (ids.length > 0) {
                const data = await getUsers(ids);
                setData(data)
            }
        })()

    }, [ids])

    return <div className={style.personsWrapper}>
        {data?.map(person => <PersonItem person={person}/>)}
    </div>
}
