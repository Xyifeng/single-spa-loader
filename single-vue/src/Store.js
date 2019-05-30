import { createStore, combineReducers } from 'redux'

const initialState = {
  refresh: 0
}

function render(state = initialState, action) {
  switch (action.type) {
    case 'REFRESH':
      return { ...state,
        refresh: state.refresh + 1
      }
    default:
      return state
  }
}

// 向外输出 Store
export const storeInstance = createStore(combineReducers({ namespace: () => 'base', render }))