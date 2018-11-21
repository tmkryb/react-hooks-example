import React from 'react';
import {Switch, Route} from 'react-router'
import Global from './containers/GlobalState';
import Local from './containers/LocalState';
import GlobalNonReducer from './containers/GlobalNonReducer';
export default function(){
    return (
        <Switch>
            <Route path="/Global" component={Global}></Route>
            <Route path="/Local" component={Local}></Route>
            <Route path="/Hairs" component={GlobalNonReducer}></Route>
        </Switch>
    )
}