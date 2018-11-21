import React, {useState} from 'react';

export default function UsersList(){

    const [users, setUsers] = useState([])

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