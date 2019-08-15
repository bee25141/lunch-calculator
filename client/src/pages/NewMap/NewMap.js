import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Geocode from "react-geocode";
import Api from "../../utils/Api";
Geocode.setApiKey("AIzaSyBOuXf9SKDWWCSBYueQCXThfVt_iXp3v20");


const mapStyles = {
    width: '100%',
    height: '100%',
  };

  function MapContainer ()  {
  constructor(props) {
      super(props);
  
      this.state = {

        locations: [],
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      }
    }


    callback = () => {
      console.log(this.state);
    }

    componentWillMount(){
      let urlParams = this.props.match.params.id
      var mapArray = []

      // console.log(urlParams)
       Api.getLocationData(urlParams) 
       .then(response => {

        for(let i=0; i<response.data.length; i++){

            Geocode.fromAddress(response.data[i].location).then(
                res => {
                  const { lat, lng } = res.results[0].geometry.location;
                  console.log(lat, lng);

                  var map_data = {
                      restaurant: urlParams,
                      address: response.data[i].location,
                      latitude: lat,
                      longitude: lng,
                      average: response.data[i].average
                  }

                  mapArray.push(map_data);
                  
                },
                error => {
                  console.error(error);
                }
              );
        }  
        // console.log(mapArray);
        this.setState({locations: mapArray}, this.callback)
    })

    }


  
    displayMarkers = () => {
      console.log(this.state.locations)
       this.state.locations.map((restaurant, index) => {
        return <Marker 
        title={restaurant.restaurant}
        name={restaurant.location + 'Average: ' + restaurant.average}
        key={index} 
        id={index} 
        position={{
         lat: restaurant.latitude,
         lng: restaurant.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }

      return (
          <Map
            google={this.props.google}
            zoom={14.35}
            style={mapStyles}
            initialCenter={{ lat: 41.879, lng: -87.625}}
          >
            {/* {this.displayMarkers()} */}
          </Map>
      );

  }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBOuXf9SKDWWCSBYueQCXThfVt_iXp3v20'
  })(MapContainer);