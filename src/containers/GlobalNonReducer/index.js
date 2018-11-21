import React from 'react';
import UserAddButton from '../UsersAddButton';
import UsersList from '../UsersList';

export default function GlobalNonReducer(){
    return (
        <>
            <UserAddButton></UserAddButton>
            <UsersList></UsersList>
        </>
    )
}