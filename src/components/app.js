import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import RateExchangeList from '../containers/rate-exchange-list';
import Earth from "./earth.jpg";
import Together from "./together.jpg";
import Logo from "./logo.js";
import Footer from "./footer.js";
export default class App extends Component {
  render() {
    return (
      <div>
        <img className="earth" src={Earth}alt="dd"/> 
        <Logo/>
        <SearchBar/>
        <RateExchangeList/>
        <img className="earthGlobe" src={Together}alt="globe"/>
        <Footer/>
        </div>
    );
  }
}
