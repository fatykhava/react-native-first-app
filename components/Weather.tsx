import React, { FC } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

type PropsType = {
  temp: number
  condition: string
  conditionDescription: string
  weatherId: number
}

type WeatherCodes = '200' | '300' | '500' | '600' | '700' | '800' | '801';

const weatherOptions = {
  '200': {
    icon: 'weather-lightning' as 'weather-lightning',
    colors: ['#141e30', '#243b55']
  },
  '300': {
    icon: 'weather-rainy' as 'weather-rainy',
    colors: ['#3a7bd5', '#3a6073']
  },
  '500': {
    icon: 'weather-pouring' as 'weather-pouring',
    colors: ['#434868', '#9a9a9a']
  },
  '600': {
    icon: 'snowflake' as 'snowflake',
    colors: ['#83a4d4', '#b6fbff']
  },
  '700': {
    icon: 'weather-fog' as 'weather-fog',
    colors: ['#3D465F', '#b79891']
  },
  '800': {
    icon: 'weather-sunny' as 'weather-sunny',
    colors: ['#05E2FF', '#07A4FF']
  },
  '801': {
    icon: 'weather-cloudy' as 'weather-cloudy',
    colors: ['#929292', '#05B0FF']
  }
}

const Weather: FC<PropsType> = ({ temp, condition, conditionDescription, weatherId }) => {

  const getWeatherKey = (id: number): WeatherCodes => {
    if (id < 800) { return String(Math.trunc(id / 100) * 100) as WeatherCodes;}
    if (id > 800) return '801';
    return String(id) as WeatherCodes;
  }

  const weatherKey = getWeatherKey(weatherId);

  return (
    <LinearGradient
      colors={weatherOptions[weatherKey].colors}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <MaterialCommunityIcons name={weatherOptions[weatherKey].icon} size={96} color="white" />
        <Text style={styles.temp}>{temp}°C</Text>
      </View>
      <View style={{...styles.container, ...styles.textContainer}}>
        <Text style={styles.title}>{condition}</Text>
        <Text style={styles.text}>{conditionDescription}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start'
  },
  temp: {
    fontSize: 42,
    color: '#fff'
  },
  title: {
    marginBottom: 10,
    fontSize: 44,
    fontWeight: '300',
    color: '#fff'
  },
  text: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '600'
  }
});

export default Weather;