// const dotenv = require("dotenv");
// dotenv.config();
const API_CLAVE = `${process.env.REACT_APP_API_CLAVE}`;

const apiConfig = ({
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: {API_CLAVE},
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
})

export default apiConfig;