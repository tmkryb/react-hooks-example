import React, {useState} from 'react';
import {useGlobalState} from '../../store/globalState'
export default function UserAddButton(){
    
    const [users, setUsers] = useGlobalState("users");
    const [newUser, setNewUser] = useState({})
    
    return (
        <>
            <p>
                New user name: <input type="text" onChange={(e) => setNewUser({...newUser, name: e.target.value})}></input>
            </p>
            <p>
                New user hair count: <input type="number" onChange={(e) => setNewUser({...newUser, hairCount: e.target.value})}></input>
            </p>
            <button onClick={() => setUsers([...users, newUser])}>Add</button>            
        </>
    )
}