import axios from 'axios';

const API_KEY = '47645926-4f20cb40ce83f0e6b3764c4b6';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page = 1, perPage = 15) => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientaiton: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: perPage,
  });

  try {
    const response = await axios.get('', { params });
    return response;
  } catch (error) {
    throw error;
  }
};
