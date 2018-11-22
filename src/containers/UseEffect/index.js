import React, {useEffect, useState} from 'react'

export default function UseEffect(){
    
    const [name, setName] = useState("Burgeriusz")
    const [surname, setSurname] = useState("Hermandy")
    useEffect(() => {        
        document.title = `${name} ${surname}`;  
        return () => {
            console.log("unmounting")
        } 
    }, [surname])
    
    return(
        <>
            <p>
                Users name: <input defaultValue={name} onChange={(e) => setName(e.target.value)}></input>                
            </p>
            <p>
                Users surname: <input defaultValue={surname} onChange={(e) => setSurname(e.target.value)}></input>
            </p>
        </>
    )
}