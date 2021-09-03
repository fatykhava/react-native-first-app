import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import weatherAPI from './api/api';
import CoordsType from './types/types';
import Weather from './components/Weather';
import { WeatherResponseType } from './types/types';

const App = () => {
  let [coords, setCoords] = useState<CoordsType | null>(null);
  let [isLoading, setIsLoading] = useState(true);
  let [weaterData, setWeatherData] = useState<WeatherResponseType | null>(null);

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    try {
      await getLocation();

      if (coords?.latitude) {
        const weatherData = await weatherAPI.getCurrentWeatherData(coords.latitude, coords.longitude);
        setWeatherData(weatherData);
        setIsLoading(false);
      }
    } catch {
      Alert.alert('Sorry', 'Error!!!');
    }
  }

  const getLocation = async () => {
    await Location.requestForegroundPermissionsAsync();
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({ });
    setCoords({ latitude, longitude });
  }

  return (
    isLoading
      ? <Loading />
      : <Weather temp={weaterData?.main.temp ? Math.round(weaterData.main.temp) : 0}
        condition={weaterData?.weather[0].main || ''} 
        conditionDescription={weaterData?.weather[0].description || ''} 
        weatherId={weaterData?.weather[0].id || 801}/>
  );
}

export default App;