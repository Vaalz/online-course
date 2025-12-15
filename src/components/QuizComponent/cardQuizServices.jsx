import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const quizService = {
  getMyQuizzes: async () => {
    const response = await api.get('student/quizzes/my-quizzes');
    return response.data;
  },

  getMyQuizzesByCategory: async (categoryId) => {
    const response = await api.get(`student/quizzes/categories/${categoryId}/my-quizzes`);
    return response.data;
  },
};

export default quizService;