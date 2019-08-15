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

        locations: [],
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      }
    }


    callback = () => {
      console.log(this.state);
    }

    componentDidMount(){
      let urlParams = this.props.match.params.id
      var mapArray = []

      console.log(urlParams)
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
        console.log(mapArray);
        this.setState({locations: mapArray}, this.callback)
    })


    //    .then(response => {
    //      let addressData= [];
         
    //      for (let i=0; i < response.data.length; i++){
    //         let addressObject = {
    //           address: response.data[i].location,
    //           average: response.data[i].average,
    //           addressKey: [i]
    //         }
    //         addressData.push(addressObject)
    //      }
    //      this.setState({restaurant: urlParams})
    //      this.setState({address_average: addressData})
    //     Promise.all(response.data.map(location => {

    //         return Geocode.fromAddress(location.location)

    //     })).then(endRes => {

    //         let resultsArray = [];
    //         let results = endRes.map(locat=>locat.results['0'].geometry.location)

    //         for (let i=0; i<results.length; i++){
    //           let resultsObject = {
    //               latitude: results[i].lat,
    //               longitude: results[i].lng
    //           }

    //           resultsArray.push(resultsObject)
    //         }
    //         console.log(resultsArray)
    //         this.setState({locations: resultsArray}, this.callback)
    //     })
        
    // })
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