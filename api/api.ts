import axios from 'axios';
import { WeatherResponseType } from '../types/types';

const API_KEY = '7855be89de72b6ea0540164aea4c0922';

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

const weatherAPI = {
  getCurrentWeatherData(lat: number, lon: number) {
    return instance.get<WeatherResponseType>(`weather?lat=${lat}&lon=${lon}&lang=en&appid=${API_KEY}&units=metric`)
      .then(response => response.data);
  }
};

export default weatherAPI;
