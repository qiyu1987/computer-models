const reducer = (state = [], action = {}) => {
    switch (action.type) {
    case 'ADD_MODEL':
        if (!state.find(element => element.id === action.payload.id)) {
            return [...state, {...action.payload}]
        }
        return state
    default:
      return state
    }
  }
  
export default reducer