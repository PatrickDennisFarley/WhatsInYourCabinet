import React, { Component } from 'react';

class DrinksIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      glass: '',
      instructions: '',
      image: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    fetch('http://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(body => {
      this.setState({
        title: body.drinks[0].strDrink,
        category: body.drinks[0].strCategory,
        glass: body.drinks[0].strGlass,
        instructions: body.drinks[0].strInstructions,
        image: body.drinks[0].strDrinkThumb
      })
    })
  }

  handleClick(event) {
    fetch('http://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(body => {
      this.setState({
        title: body.drinks[0].strDrink,
        category: body.drinks[0].strCategory,
        glass: body.drinks[0].strGlass,
        instructions: body.drinks[0].strInstructions,
        image: body.drinks[0].strDrinkThumb
      })
    })
  }

  render() {

    let title = this.state.title;
    let category = this.state.category;
    let glass = this.state.glass;
    let instructions = this.state.instructions;
    let image = this.state.image;
      return(
        <div>
          <h1>What's In Your Cabinet?</h1>
          <input type="button" onClick={this.handleClick} value="Get a Random Drink!"/>
          <h3>{title}</h3>
          <h5>{category}</h5>
          <h5>{glass}</h5>
          <p>{instructions}</p>
          <img src={image} alt={title}/>
        </div>
      )
  }
}
export default DrinksIndexContainer;
