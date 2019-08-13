import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Geocode from "react-geocode";
import Api from "../../utils/Api";
Geocode.setApiKey("AIzaSyBOuXf9SKDWWCSBYueQCXThfVt_iXp3v20");


const mapStyles = {
    width: '100%',
    height: '100%',
  };

  class MapContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        addressKey: "",
        restaurant: "",
        address_average: [],
        locations: []
      }
    }

    callback = () => {
      console.log(this.state);
    }

    componentDidMount(){
       Api.getLocationData("chipotle")
       .then(response => {
         let addressData= [];
         
         for (let i=0; i < response.data.length; i++){
            let addressObject = {
              address: response.data[i].location,
              average: response.data[i].average,
              addressKey: [i]
            }
            addressData.push(addressObject)
         }
         this.setState({restaurant: "chipotle"})
         this.setState({address_average: addressData})
        Promise.all(response.data.map(location => {

            return Geocode.fromAddress(location.location)

        })).then(endRes => {

            let resultsArray = [];
            let results = endRes.map(locat=>locat.results['0'].geometry.location)

            for (let i=0; i<results.length; i++){
              let resultsObject = {
                  latitude: results[i].lat,
                  longitude: results[i].lng
              }

              resultsArray.push(resultsObject)
            }
            console.log(resultsArray)
            this.setState({locations: resultsArray}, this.callback)
        })
        
    })
    }
  
    displayMarkers = () => {
      return this.state.locations.map((restaurant, index) => {
        return <Marker key={index} id={index} position={{
         lat: restaurant.latitude,
         lng: restaurant.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }

    render() {
      return (
          <Map
            google={this.props.google}
            zoom={14.35}
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