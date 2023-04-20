import React, {Component} from 'react';
import css from '../styles.module.css';
export default class Searchbar extends Component{
    state ={
        query:'',
    }
    handleChange = (e) =>{
        const {value} = e.target;
        this.setState({query: value})
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
        };
    render(){
    return <header className={css.Searchbar}>
  <form 
  onSubmit={this.handleSubmit}
  className={css.SearchForm}>
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormButtonLabel}>Search</span>
    </button>

    <input
    name='query'
      className={css.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleChange}
      value={this.state.query}
    />
  </form>
</header>
    }
}