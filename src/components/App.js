import React from 'react';
import './App.css';
import MenuAppBar from "./menuappbar/MenuAppBar";
import { Router, Route } from 'react-router-dom';
import Login from "./login/userLogin";
import Register from "./register/userRegister";
import {mapHome} from "./map/mapHome";
import {history} from "../_helpers/history";
import Cards from "./cards/card";
import {GoogleApiWrapper, Map, Marker} from "google-maps-react";
import Booking from "./booking/userBooking";

export class App extends React.Component {
  render() {
      return (
          <div>
              <MenuAppBar/>
              {/* <Map
                  google={this.props.google}
                  zoom={8}
                  style={mapStyles}
                  initialCenter={{lat: -37.8083605, lng: 144.9646012}}
              >
                  <Marker position={{ lat: -37.8083605, lng: 144.9646012}}/>
              </Map> */}
              {/* <Cards/> */}
              <Router history={history}>
                  <div className="App-body">
                      <Route path="/map" component={mapHome}/>
                      <Route path="/login" component={Login}/>
                      <Route path="/register" component={Register}/>
                      <Route path="/booking" component={Booking}/>
                      <Route path="/cards" component={Cards}/>
                  </div>
              </Router>
          </div>
      );
  }
}

const mapStyles = {
    width: '75%',
    height: '100%',
};


export default GoogleApiWrapper({
    apiKey: 'AIzaSyBMvbu73pJlnSlCobcEH9MgOVwXrv8dyKc'
})(App);
