import axios from "axios";

export default {
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
        return axios.post("/api/jobs" + jobData);
    }
};