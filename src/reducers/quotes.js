export default (state = [], action) => {
  switch (action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote]
    
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
     
      let q = state.find(q=> q.quoteId == action.quoteId)
      debugger
      q.votes ++
      return Object.assign([],state, q)

    case 'DOWNVOTE_QUOTE':
      let qq = state.find(q => {q.id == action.quoteId})
      qq.votes --
      return Object.assign([],state, q)
  default:
    return state;
}
}
