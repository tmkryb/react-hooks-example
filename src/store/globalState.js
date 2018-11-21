import { createGlobalState } from 'react-hooks-global-state';


export const { GlobalStateProvider, useGlobalState, setGlobalState } = createGlobalState ({users: []});