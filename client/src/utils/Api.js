import axios from "axios";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyBOuXf9SKDWWCSBYueQCXThfVt_iXp3v20");


export default {
    getAllData: function () {
        return axios.get("/api/users/data");
    },

    addLunch: function (lunch) {
        var graphArray = [] 

        axios.post("/api/users/lunch", lunch)
        .then(function (response){
      
            for (var i=0; i < response.data.length; i++){
     
             let graphData = {
                   restaurant: response.data[i].restaurant,
                   value: response.data[i].average
                   };
     
             graphArray.push(graphData)
            }
            return graphArray
          })
                
    },

    getLocationData: function(restaurant) {
        let mapArray = []
        axios.get("/api/users/location/" + restaurant)
        .then(function (response){
            console.log(response.data)

            for(let i=0; i<response.data.length; i++){

                Geocode.fromAddress(response.data[i].location).then(
                    res => {
                      const { lat, lng } = res.results[0].geometry.location;
                      console.log(lat, lng);

                      let mapData = {
                          restaurant: restaurant,
                          address: response.data[i].location,
                          latitude: lat,
                          longitude: lng,
                          average: response.data[i].average
                      }

                      mapArray.push(mapData);
                    },
                    error => {
                      console.error(error);
                    }
                  );
            }
            
        })
    }
}