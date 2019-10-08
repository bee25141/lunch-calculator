import axios from "axios";


export default {

    getAllData: function () {
        return axios.get("/api/users/data");
    },

    getLocationData: function(restaurant) {
      return  axios.get("/api/users/location/" + restaurant)
    },

    
    addLunch: function (lunch) {
      return axios.post("/api/users/lunch", lunch)

    },

    createUser: function(user) {
      return axios.post("/api/user/create", user)
    },

    login: function(loginObject) {
      return axios.post("/api/user/login", loginObject)
    },

    logout: function(user) {
      return axios.post("api/user/logout", user)
    }
    
    
}