export default (state = [], action) => {
  switch (action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote]
    
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.quoteId !== action.quoteId)

    case 'UPVOTE_QUOTE':
      let q = state.find(q=> q.quoteId == action.quoteId)
      q.votes ++
      return Object.assign([],state, q)

    case 'DOWNVOTE_QUOTE':
      let qq = state.find(q => q.quoteId == action.quoteId)
      if(qq.votes>0){
      qq.votes --
      return Object.assign([],state, q)
      }else{
        return state
      }
  default:
    return state;
}
}
