import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Pokedex from './imagenes/LetrasLogin1.png';
import Pokeball from './imagenes/PK.png';
import LoginCmp from './components/LoginCmp';
import PokemonList from './components/PokemonList';
import Switch from 'react-router-dom/Switch';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginCmp}/>
      <Route path="/PL" component={PokemonList}/>
    </Switch>
  </Router>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*imagen Pokedex*/}
        <header className="Pokedex-Name_H">
          <img src={Pokedex} className="Pokedex-Name" alt="Nombre-Login"/>
        </header>

          {/*imagen de la pokeball*/}
          <img src={Pokeball} className="Pokeball-item" alt="PI"/>
        <ReduxProvider store={reduxStore}>
          <div>
            {routing}
          </div>
        </ReduxProvider>
      </div>
    );
  }
}

export default App;
