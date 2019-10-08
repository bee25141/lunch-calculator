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

    getAuthenticatedUser: function (session_token) {
      return axios.get("/api/user/" + session_token);
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