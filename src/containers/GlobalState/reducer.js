import { ADD_USER } from './constants'

export const initialState = []

export function reducer(state, action) {
  
  switch (action.type) {    
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    default: return state;
  }
}