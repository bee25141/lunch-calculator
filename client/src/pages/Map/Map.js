import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Api from "../../utils/Api";


const mapStyles = {
    width: '100%',
    height: '100%',
  };

  class MapContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        restaurant: "",
        locations: [{latitude: 47.359423, longitude: -122.021071, average: ""},
                {latitude: 47.2052192687988, longitude: -121.988426208496, average: ""},
                {latitude: 47.6307081, longitude: -122.1434325, average: ""},
                {latitude: 47.3084488, longitude: -122.2140121, average: ""},
                {latitude: 47.5524695, longitude: -122.0425407, average: ""}]
      }
    }

    componentDidMount(){
        Api.getLocationData("chipotle")
        
    }
  
    displayMarkers = () => {
      return this.state.locations.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }

    render() {
      return (
          <Map
            google={this.props.google}
            zoom={14.5}
            style={mapStyles}
            initialCenter={{ lat: 41.879, lng: -87.625}}
          >
            {this.displayMarkers()}
          </Map>
      );
    }
  }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBOuXf9SKDWWCSBYueQCXThfVt_iXp3v20'
  })(MapContainer);