const url = 'https://rickandmortyapi.com/api';

export interface Person {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: Origin
    location: Location
    image: string
    episode: string[]
    url: string
    created: string
}

interface Origin {
    name: string
    url: string
}

interface Location {
    name: string
    url: string
}

export const getUsers = async (ids: number[]) => {
    const data = await fetch(url + '/character/' + ids)
    const response: Person[] = await data.json();

    return response
}

