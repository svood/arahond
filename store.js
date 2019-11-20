import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  data:{},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TICK':
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        light: !!action.light,
      
      }
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'RESET':
      return {
        ...state,
        count: initialState.count,
      }
    case 'GETJOBBERSLIST':
      return {
        ...state,
        data: action.data.results,
      }
      case 'FINDJOOBERBYINN':
          return {
            ...state,
            data: action.data.results,
          }

      
    default:
      return state
  }
}

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}
