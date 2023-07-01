import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const axiosSecure = axios.create({
  baseURL: 'https://weak-jade-pigeon-vest.cyclic.app', // replace with your base url
});

const useAxiosSecure = () => {
  const { userOut } = useContext(AuthContext); 
  const navigate = useNavigate(); 

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await userOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [userOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;