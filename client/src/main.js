import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import DrinksIndexContainer from './DrinksIndexContainer'

const Main = props => {

  return(
    <Router>
      <div>
        <Route exact path='/' component={DrinksIndexContainer} />
      </div>
    </Router>
  )
}

export default Main;
