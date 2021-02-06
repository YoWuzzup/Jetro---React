const initialState = {
    items: [],
}

const items = (state = initialState, action) =>{
    if (action.type === 'SET_ITEMS') {
        return {
          ...state,
          items: action.payload,
        };
      }
      return state;
};


export default items;