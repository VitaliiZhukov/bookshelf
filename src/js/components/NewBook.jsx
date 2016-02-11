import React from 'react';
import ActionCreator from '../actions/BooksActionCreators';

export default React.createClass({
  getInitialState() {
    return {
      valid: false,
      authorValid: false,
      titleValid: false,
      descriptionValid: true
    };
  },

  componentDidMount() {
  },

  onAddBook(){
    const descr = this.state.descr || '';
    const rating = this.state.rating ? parseInt(this.state.rating):0;
    ActionCreator.addBook(this.state.bookTitle,this.state.author,descr,rating);
    this.replaceState(this.getInitialState())
  },

  handleTitleChange(e){
    let regE = /^[a-zA-Zа-яА-я. 0-9]+$/;
    let titleValid = this.validate(e.target.value,regE)

    this.setState({
      bookTitle: e.target.value,
      titleValid: titleValid,
      valid: (titleValid&&this.state.authorValid&&this.state.descriptionValid)
    });
  },

  handleAuthorChange(e){
    let regE = /^[a-zA-Zа-яА-я. ]+$/;
    let authorValid = this.validate(e.target.value,regE)

    this.setState({
      author: e.target.value,
      authorValid: authorValid,
      valid: (authorValid&&this.state.titleValid&&this.state.descriptionValid)
    });
  },

  handleDescriptionChange(e){
    let descrValid = (e.target.value)?this.validate(e.target.value):true; // If description is empty - it's ok. If not - validate as string.

    this.setState({
      descr:e.target.value,
      descriptionValid: descrValid,
      valid: (descrValid&&this.state.titleValid&&this.state.authorValid)
    });
  },

  handleRating(e){
    this.setState({rating:e.target.value});
  },

  validate(val,regE){
    let valid = true;
    valid = valid&&(val.length >= 3);
    if (regE){
      valid = valid&&regE.test(val);      
    }
    return valid;
  },

  render() {
    return (
      <div className="mdl-card mdl-shadow--2dp new-book__container">
        <h4>Новая книга</h4>
        <div 
          className="mdl-textfield mdl-js-textfield"
          style={{backgroundColor: (this.state.titleValid||(!this.state.bookTitle))?'White':'AntiqueWhite'}}>
          <input 
            className="mdl-textfield__input" 
            type="text" 
            id="new-book__title" 
            onChange={this.handleTitleChange} 
            autoComplete="off" 
            value={this.state.bookTitle} />
          <label 
            className="mdl-textfield__label" 
            htmlFor="new-book__title">Название...
          </label>
        </div>

        <div 
          className="mdl-textfield mdl-js-textfield"
          style={{backgroundColor: (this.state.authorValid||(!this.state.author))?'White':'AntiqueWhite'}}>
          <input 
            className="mdl-textfield__input" 
            type="text" 
            id="new-book__author" 
            onChange={this.handleAuthorChange} 
            autoComplete="off" 
            value={this.state.author}/>
          <label 
            className="mdl-textfield__label" 
            htmlFor="new-book__author">Автор...
          </label>
        </div>

        <div 
          className="mdl-textfield mdl-js-textfield"
          style={{backgroundColor: (this.state.descriptionValid)?'White':'AntiqueWhite'}}>
          <textarea 
            className="mdl-textfield__input" 
            type="text" 
            id="new-book__description" 
            onChange={this.handleDescriptionChange} 
            autoComplete="off" 
            rows="3" 
            value={this.state.descr}/>
          <label 
            className="mdl-textfield__label" 
            htmlFor="new-book__description">Описание...
          </label>
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
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" disabled={!this.state.valid} onClick={this.onAddBook}>Добавить на полку
            </a>
        </div>
      </div>
    );
  }
});
