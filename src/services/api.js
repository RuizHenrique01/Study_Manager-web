const axios = require('axios').default;

const instance = axios.create({
    baseURL:"https://study-manager-api.herokuapp.com",
    timeout: 3000
});

export default instance;