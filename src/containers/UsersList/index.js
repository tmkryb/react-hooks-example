import React, {useState} from 'react';
import { useGlobalState } from '../../store/globalState'

export default function UsersList(){

    const [users] = useGlobalState('users')

    return(
        <>
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
    );
}