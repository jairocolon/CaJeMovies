const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '901609564690fb9e0664182b3f6cff7b',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;