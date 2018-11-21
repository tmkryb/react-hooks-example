import React, {useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import { dispatch, useGlobalState } from '../../store/store';
import { ADD_USER } from './constants'

const fetchData = (usedToAdd) => dispatch({ type: ADD_USER, payload: usedToAdd })

export default function GlobalStateComponent(){
    
    const [users] = useGlobalState("users");
    const [newUser, setNewUser] = useState({});
    
    return (
        <>
            <p>
                New user name: <input type="text" onChange={(e) => setNewUser({...newUser, name: e.target.value})}></input>
            </p>
            <p>
                New user hair count: <input type="number" onChange={(e) => setNewUser({...newUser, hairCount: e.target.value})}></input>
            </p>
            <button onClick={() => fetchData(newUser)}>Add</button>     
           <h1>User hair list</h1>
            {users.map(user => 
                <div>
                    <p>
                        UserName: {user.name}
                    </p>
                    <p>
                        User hair count: {user.hairCount}
                    </p>
                </div>                
                )}
        </>
    )
}