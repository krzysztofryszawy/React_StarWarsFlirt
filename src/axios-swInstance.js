import axios from 'axios';

const swInstance = axios.create({
    baseURL: 'https://swapi.co/api/'
})

//https://starwars-flirt.firebaseio.com/

export default swInstance;