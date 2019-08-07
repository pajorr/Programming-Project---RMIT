import React from 'react';
import './App.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MenuAppBar from "./menuappbar/MenuAppBar";

export class App extends React.Component {
  render() {
      return (
          <div>
              <MenuAppBar/>
              <Map
                  google={this.props.google}
                  zoom={8}
                  style={mapStyles}
                  initialCenter={{lat: -37.8083605, lng: 144.9646012}}
              >
                <Marker position={{ lat: -37.8083605, lng: 144.9646012}}/>
              </Map>
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

