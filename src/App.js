import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mes voyages</h1>
        </header>
        <Quote 
        ville= "La ville de Tanger"
        pays="Maroc"
        image="https://tv5.ca/media/h81wn1ra6vwm8r/1185X666/06_lesflots_s01_episode-Maroc_tanger_paysage_copyright_jerome-Hof.jpg?t=65ed4a34b26e15186cf38819f8dc95fe"
        distance= "1819 km"
        />
        <Quote
        ville= "Malaga"
        pays= "Espagne"
        image="https://www.famoushostels.com/wp-content/uploads/rsz_malaga_hostel.jpg"
        distance= "1476 km"        
        />
      </div>
    );
  }
}

export default App;
