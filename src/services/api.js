const axios = require('axios').default;

const instance = axios.create({
    baseURL:"https://study-manager-api.herokuapp.com",
});

export default instance;