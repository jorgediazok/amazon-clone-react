export const initialState ={
  basket: [],
  user: null
}

const reducer = (state, action) => {
  console.log(action)
  switch(action.type){
    case "ADD_TO_BASKET": 
    //Logic for adding item to basket
    return {state}
    break;
    case "REMOVE_FROM_BASKET":
    //Logic for remove item from basket
    return {state}
    break;
    default: 
    return state;
  }
}

export default reducer;