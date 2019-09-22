import axios from "axios";


export default {


    getAllData: function () {
        return axios.get("/api/users/data");
    },

    getLocationData: function(restaurant) {
      return  axios.get("/api/users/location/" + restaurant)
    },

    
    addLunch: function (lunch) {
        var graphArray = [] 
        console.log("lunch", lunch)

        // return axios.post("/api/users/lunch", lunch)
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

    createUser: function(user) {
      return axios.post("/api/user/create", user)
    }
    
    
}