import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { dispatch, useGlobalState } from '../../store/store';
import { FETCH_IMAGES } from './constants'

const fetchData = () => dispatch({ type: FETCH_IMAGES })

export default function HomeComponent(){
    
    const [value] = useGlobalState("imagesList");
    
    return (
        <>
            <p>
                Lista aplikacji                
            </p>
            <div>
                {value.loading.toString()}
            </div>
            <button onClick={() => {fetchData()}}>Fetch</button>
        </>
    )
}