export default (state = [], action) => {
  switch (action.type){
    case 'ADD_QUOTE':
      return {quote: [...state, action.quote]}
  

  default:
    return state;
}
}
