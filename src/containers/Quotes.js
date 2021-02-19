import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends Component {

renderCard = () =>{
  if(this.props.quote.length > 0){
return this.props.quote.map(quote => {
  return  <div key={quote.quoteId}><QuoteCard key={quote.quoteId} remove={removeQuote} upvote={()=>this.props.dispatch(upvoteQuote(quote.quoteId))} downvote={downvoteQuote} quote={quote}/></div>

})
  }
}


  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.renderCard()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = (state) =>{
  return {quote: state.quotes}
}
export default connect(mapStateToProps)(Quotes);
