import React, {useState, useEffect} from 'react';


export default function LocalState(){

    const [counter, setCount] = useState(0);
    const [name, setName] = useState("Tomasz");
    useEffect(() => {
       document.title = `${name} counter: ${counter}`
    });

    return(
        <>
            <p>
                Counter state: {counter}
            </p>
            <button onClick={() => setCount(counter + 1)}>+</button>
            <button onClick={() => setCount(counter - 1)}>-</button>
            
            <p>
                Input your name: <input type="text" defaultValue={name} onChange={(e) => setName(e.target.value)}></input>
            </p>
            <p>
                Hello {name}!
            </p>
        </>
    )
}