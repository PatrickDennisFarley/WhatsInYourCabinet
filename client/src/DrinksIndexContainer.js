import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class DrinksIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      glass: '',
      instructions: '',
      image: '',
      ingredient1: '',
      ingredient2: '',
      ingredient3: '',
      ingredient4: '',
      ingredient5: '',
      ingredient6: '',
      ingredient7: '',
      ingredient8: '',
      ingredient9: '',
      ingredient10: '',
      measure1: '',
      measure2: '',
      measure3: '',
      measure4: '',
      measure5: '',
      measure6: '',
      measure7: '',
      measure8: '',
      measure9: '',
      measure10: '',
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
        image: body.drinks[0].strDrinkThumb,
        ingredient1: body.drinks[0].strIngredient1,
        ingredient2: body.drinks[0].strIngredient2,
        ingredient3: body.drinks[0].strIngredient3,
        ingredient4: body.drinks[0].strIngredient4,
        ingredient5: body.drinks[0].strIngredient5,
        ingredient6: body.drinks[0].strIngredient6,
        ingredient7: body.drinks[0].strIngredient7,
        ingredient8: body.drinks[0].strIngredient8,
        ingredient9: body.drinks[0].strIngredient9,
        ingredient10: body.drinks[0].strIngredient10,
        measure1: body.drinks[0].strMeasure1,
        measure2: body.drinks[0].strMeasure2,
        measure3: body.drinks[0].strMeasure3,
        measure4: body.drinks[0].strMeasure4,
        measure5: body.drinks[0].strMeasure5,
        measure6: body.drinks[0].strMeasure6,
        measure7: body.drinks[0].strMeasure7,
        measure8: body.drinks[0].strMeasure8,
        measure9: body.drinks[0].strMeasure9,
        measure10: body.drinks[0].strMeasure10
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
        image: body.drinks[0].strDrinkThumb,
        ingredient1: body.drinks[0].strIngredient1,
        ingredient2: body.drinks[0].strIngredient2,
        ingredient3: body.drinks[0].strIngredient3,
        ingredient4: body.drinks[0].strIngredient4,
        ingredient5: body.drinks[0].strIngredient5,
        ingredient6: body.drinks[0].strIngredient6,
        ingredient7: body.drinks[0].strIngredient7,
        ingredient8: body.drinks[0].strIngredient8,
        ingredient9: body.drinks[0].strIngredient9,
        ingredient10: body.drinks[0].strIngredient10,
        measure1: body.drinks[0].strMeasure1,
        measure2: body.drinks[0].strMeasure2,
        measure3: body.drinks[0].strMeasure3,
        measure4: body.drinks[0].strMeasure4,
        measure5: body.drinks[0].strMeasure5,
        measure6: body.drinks[0].strMeasure6,
        measure7: body.drinks[0].strMeasure7,
        measure8: body.drinks[0].strMeasure8,
        measure9: body.drinks[0].strMeasure9,
        measure10: body.drinks[0].strMeasure10
      })
    })
  }

  render() {
    let title = this.state.title;
    let category = this.state.category;
    let glass = this.state.glass;
    let instructions = this.state.instructions;
    let image = this.state.image;
    let ingredient1 = this.state.ingredient1;
    let ingredient2 = this.state.ingredient2;
    let ingredient3 = this.state.ingredient3;
    let ingredient4 = this.state.ingredient4;
    let ingredient5 = this.state.ingredient5;
    let ingredient6 = this.state.ingredient6;
    let ingredient7 = this.state.ingredient7;
    let ingredient8 = this.state.ingredient8;
    let ingredient9 = this.state.ingredient9;
    let ingredient10 = this.state.ingredient10;
    let measure1 = this.state.measure1;
    let measure2 = this.state.measure2;
    let measure3 = this.state.measure3;
    let measure4 = this.state.measure4;
    let measure5 = this.state.measure5;
    let measure6 = this.state.measure6;
    let measure7 = this.state.measure7;
    let measure8 = this.state.measure8;
    let measure9 = this.state.measure9;
    let measure10 = this.state.measure10;

    return(
      <div>
        <h1>What's In Your Cabinet?</h1>
        <Button bsStyle='primary' onClick={this.handleClick}>Get a Random Drink!</Button>
        <h3>{title}</h3>
        <img className="drinkPic" src={image} alt={title}/>
        <h4>Ingredients:</h4>
        <p>{measure1} {ingredient1}</p>
        <p>{measure2} {ingredient2}</p>
        <p>{measure3} {ingredient3}</p>
        <p>{measure4} {ingredient4}</p>
        <p>{measure5} {ingredient5}</p>
        <p>{measure6} {ingredient6}</p>
        <p>{measure7} {ingredient7}</p>
        <p>{measure8} {ingredient8}</p>
        <p>{measure9} {ingredient9}</p>
        <p>{measure10} {ingredient10}</p>
        <h4>Instructions:</h4>
        <p>{instructions}</p>
        <h5>Category: {category}</h5>
        <h5>Glass: {glass}</h5>
      </div>
    )
  }
}

export default DrinksIndexContainer;
