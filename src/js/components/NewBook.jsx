import React from 'react';
import ActionCreator from '../actions/BooksActionCreators';

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  onAddBook(){
    ActionCreator.addBook(this.state.bookTitle,this.state.author,this.state.descr,this.state.rating);
    this.replaceState(this.getInitialState())
  },

  handleTitleChange(e){
    this.setState({bookTitle:e.target.value});
  },

  handleAuthorChange(e){
    this.setState({author:e.target.value});
  },

  handleDescriptionChange(e){
    this.setState({descr:e.target.value});
  },

  handleRating(e){
    this.setState({rating:e.target.value});
  },

  render() {
    return (
      <div className="mdl-card mdl-shadow--2dp new-book__container">
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" id="new-book__title" onChange={this.handleTitleChange} autoComplete="off" value={this.state.bookTitle}/>
          <label className="mdl-textfield__label" htmlFor="new-book__title">Название...</label>
        </div>

        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" id="new-book__author" onChange={this.handleAuthorChange} autoComplete="off" value={this.state.author}/>
          <label className="mdl-textfield__label" htmlFor="new-book__author">Автор...</label>
        </div>

        <div className="mdl-textfield mdl-js-textfield">
          <textarea className="mdl-textfield__input" type="text" id="new-book__description" onChange={this.handleDescriptionChange} autoComplete="off" rows="3" value={this.state.descr}/>
          <label className="mdl-textfield__label" htmlFor="new-book__description">Описание...</label>
        </div>

        <div className="star-rating">
          <div className="star-rating__wrap">
            <input className="star-rating__input" id="star-rating-5" type="radio" name="rating" value="5" onChange={this.handleRating}/>
            <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-5" title="5 out of 5 stars"></label>
            <input className="star-rating__input" id="star-rating-4" type="radio" name="rating" value="4" onChange={this.handleRating}/>
            <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-4" title="4 out of 5 stars"></label>
            <input className="star-rating__input" id="star-rating-3" type="radio" name="rating" value="3" onChange={this.handleRating}/>
            <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-3" title="3 out of 5 stars"></label>
            <input className="star-rating__input" id="star-rating-2" type="radio" name="rating" value="2" onChange={this.handleRating}/>
            <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-2" title="2 out of 5 stars"></label>
            <input className="star-rating__input" id="star-rating-1" type="radio" name="rating" value="1" onChange={this.handleRating}/>
            <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-1" title="1 out of 5 stars"></label>
          </div>
        </div>        

        <div className="mdl-card__actions">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"  onClick={this.onAddBook}>Добавить на полку
            </a>
        </div>
      </div>
    );
  }
});
