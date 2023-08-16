import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '5257856f789bada50296aabdc3a8b8f3';

// Запит на список найпопулярніших
export const getMoveTrending = async () => {
  try {
    const fetchLink = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios.get(fetchLink);
    return response;
  } catch (error) {
    console.error('Oops, there is no movies');
  }
};

// Запит за ключовим словом
export const getMoveName = async (searchQuery) => {
  try {
    const fetchLink = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`;
    const response = await axios.get(fetchLink);
    return response;
  } catch (error) {
    console.error('Oops, there is no movies');
  }
};

// Запит за інформації про фільм по ID
export const getMoveInfo = async (movieId) => {
  try {
    const fetchLink = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`;
    const response = await axios.get(fetchLink);
    return response;
  } catch (error) {
    console.error('Oops, there is no movies');
  }
};

// Запит за інформації про фільм по ID Cast
export const getMoveCast = async (movieId) => {
  try {
    const fetchLink = `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    const response = await axios.get(fetchLink);
    return response;
  } catch (error) {
    console.error('Oops, there is no movies');
  }
};

// Запит за інформації про фільм по ID Reviews
export const getMoveReviews = async (movieId) => {
  try {
    const fetchLink = `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`;
    const response = await axios.get(fetchLink);
    return response;
  } catch (error) {
    console.error('Oops, there is no movies');
  }
};
