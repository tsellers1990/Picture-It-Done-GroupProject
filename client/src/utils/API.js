import axios from "axios";


const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

export default {
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
      },
    getJobs: function() {
        return axios.get("/api/jobs");
    },
    getJob: function(id) {
        return axios.get("/api/jobs" + id);
    },
    deleteJob: function(id) {
        return axios.delete("/api/jobs" + id);     
    },
    saveJob: function(jobData) {
        console.log(jobData)
        return axios.post("/api/jobs" , jobData);
    }
};