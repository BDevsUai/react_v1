import axios from 'axios';

const md5 = require('md5');

const publicKey = '9713cc0de7080c8968fcec3c6697f4df';
const privateKey = '82169af303fadeb92cfa79cb23bb9d53b282786d';
const timeStamp = Date.now().toString();

const hash = md5(timeStamp + privateKey + publicKey);

const url = `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&limit=100&offset=0`;

const api = axios.create({
    baseURL:url
})

export default api;