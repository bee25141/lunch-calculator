import axios from "axios";

export default {
    getAllData: function () {
        return axios.get("/api/users/data");
        console.log("hit axios");
    },

    addLunch: function (lunch) {
        return axios.post("/api/users/lunch", lunch);
    }
}