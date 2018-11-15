import { FETCH_IMAGES, IMAGES_FETCHED } from './constants'

export const initialState = {
  images: [],
  loading: false
}

export function reducer(state, action) {
  
  switch (action.type) {
    case FETCH_IMAGES:      
      let newState = { 
        ...state,
        imagesList:{
          ...state.imagesList,
          loading: true,
        }        
      }      
      return newState
    case IMAGES_FETCHED:
      return {
        ...state,
        imagesList: {
          ...state.imagesList,
          loading: false,
          images: action.payload
        },
      }
    default: return state;
  }
}