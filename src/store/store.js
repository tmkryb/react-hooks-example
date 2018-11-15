import { createStore } from 'react-hooks-global-state'
import { initialState as imagesListState, reducer as imagesListReducer } from '../containers/ImagesList/reducer';

const reducers = [
    imagesListReducer
]

const initialState = {
    imagesList: imagesListState
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