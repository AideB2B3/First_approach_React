import { useEffect, useState } from "react";

export function RandomUser(){

    const [user, setUser] = useState (null)

    useEffect( () => {
        //faccio qualcosa
        fetch('https://randomuser.me/api/')
        .then((res)=>res.json())
        .then((data) => setUser(data.results[0]))
     }
        ,[] // fare qualcosa quando cambio lo stato
    )
    return (
        <> 
            <h2> Utente Casuale</h2>
            {
                user ?
                <>
                <img src={user.picture.large} alt="User" />
                <h3> {user.name.first} {user.name.last}</h3>
                <p>Email: {user.eamil} </p>
                </>
                :
                <p> Caricamento:: </p>
            }
        </>
    );
}