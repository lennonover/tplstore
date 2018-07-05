import React, { Component } from 'react'

import Login from './compontents/login'
import HomePage from './compontents/home'

import PropTypes from 'prop-types'
import { HashRouter} from 'react-router-dom'
import { Redirect,Switch, Route} from 'react-router-dom'

import './App.css'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {

      }
  }
  static contextTypes = {
      store: PropTypes.object,
      router: PropTypes.shape({
        history: PropTypes.object.isRequired,
        route: PropTypes.object.isRequired,
        staticContext: PropTypes.object
      })
  }
  componentDidMount () {
  }
  render() {
    return [
      <HashRouter>
          <Switch>
            <Route exact path='/login'  component={Login}/>
            <Route  path='/home'  component={HomePage}/>
            <Redirect to="/login" />
          </Switch>
      </HashRouter>
    ];
  }
}


export default App;