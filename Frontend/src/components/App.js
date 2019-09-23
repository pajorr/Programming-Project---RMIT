import React from 'react';
import './App.css';
import MenuAppBar from "./menuappbar/MenuAppBar";
import { Router, Route } from 'react-router-dom';
import Login from "./login/userLogin";
import Register from "./register/userRegister";
import mapHome from "./map/mapHome";
import {history} from "../_helpers/history";
import {GoogleApiWrapper, Map, Marker} from "google-maps-react";
import Booking from "./booking/userBooking";
import paypal from "./payment/paypal";
import StaffRegister from "./register/staffRegister";
import StaffLogin from "./login/staffLogin";

export class App extends React.Component {
  render() {
      return (
          <div>
              <Router history={history}>
                <MenuAppBar/>
              </Router>
              <Router history={history}>
                  <div className="App-body">
                      <Route exact path="/" component={mapHome}/>
                      <Route path="/login" component={Login}/>
                      <Route path="/register" component={Register}/>
                      <Route path="/staffregister" component={StaffRegister}/>
                      <Route path="/stafflogin" component={StaffLogin}/>
                  </div>
              </Router>
          </div>
      );
  }
}

const mapStyles = {
    width: '100%',
    height: '100%',
};


export default GoogleApiWrapper({
    apiKey: 'AIzaSyBMvbu73pJlnSlCobcEH9MgOVwXrv8dyKc'
})(App);
