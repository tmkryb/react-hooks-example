import { createStore } from 'react-hooks-global-state'
import { initialState as usersListState, reducer as imagesListReducer } from '../containers/GlobalState/reducer';

const reducers = [
    imagesListReducer
]

const initialState = {
    users: usersListState
}

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        default:
            newState = state;
            break;
    }
    return reducers.reduce((s, r) => r(s, action), newState);
}

export const { GlobalStateProvider, dispatch, useGlobalState } = createStore(
    reducer,
    initialState
);