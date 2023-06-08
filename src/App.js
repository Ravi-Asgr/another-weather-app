import { useState, useEffect } from 'react';
import styles from './css/home.module.css'
import { MainCard } from './components/maincard/maincard';
import { ContentBox } from './components/contentbox/contentbox';
import { Header } from './components/header/header'
import { DateTime } from './components/datetime/datetime';
import { Search } from './components/search/search';
import { MetricsBox } from './components/metricsbox/metricsbox';
import { UnitSearch } from './components/unitsearch/unitsearch';
import { ToggleBox } from './components/togglebox/togglebox';
import { FutureDays,FormattedForecast } from './util';

function App() {

  /* Set state of Unit radio */
  const [unit, setUnit] = useState('metric');
  /* Set state of weather type */
  const [weatherType, setweatherType] = useState('today');
  /* Set state of forecast date */
  const [forecastDay, setForecastDay] = useState('');
  /* Set state of forecast weather */
  //const [isForecast, setIsForecast] = useState(false);
  /* Set state for weather response*/
  const [weatherData, setweatherData] = useState();
  /* Set state for forecast weather response*/
  const [forecastWeatherData, setForecastWeatherData] = useState();
  /* Set state to call weather api */
  const [isRefresh, doRefresh] = useState(true);
  /* Set state for searched city */
  const [city, setCity] = useState('Bangalore');

  /* Get next 3 days in array */
  const dayArray = FutureDays(3);

  useEffect(() => {
    const apiCall = async () => {
      console.log('Current API call ...... ' + doRefresh)
      const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=e557c5f711ee42279337c14a07678335&units=metric');
      const weatherData = await resp.json();
      setweatherData({...weatherData})
    }
    apiCall();
  }, [isRefresh])

  const forecastApiCall = async () => {
    console.log('Forecast API call ...... ')
    const resp = await fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=e557c5f711ee42279337c14a07678335&units=metric');
    return await resp.json();
  }

  // useEffect(() => {
  //   const apiCall = async () => {
  //     const resp = await fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=e557c5f711ee42279337c14a07678335&units=metric');
  //     const weatherData = await resp.json();
  //     console.log('Forecast API call ...... ' + doRefresh)
  //     console.log('Forecast API response ...... ' + weatherData)
  //   }
  //   apiCall();
  // }, [isRefresh])


  const toggleUnit = (e) => {
    setUnit(e.target.value);
    //doRefresh(!isRefresh);
  }

  const toggleWeatherType = async (e) => {
    setweatherType(e.target.name);
    if (e.target.name === 'today') {
      setForecastDay('');
      doRefresh(!isRefresh);
    } else {
      setForecastDay(dayArray[0]);
      const weatherData = await forecastApiCall();
      const formattedForecast = await FormattedForecast(weatherData);
      setForecastWeatherData(formattedForecast);
      setweatherData({...formattedForecast[0]});
    }
    
    // if (e.target.name === 'forecast') {
    //   const weatherData = await forecastApiCall();
    //   setweatherData({...weatherData})
    // }
      
    console.log('dates ' + dayArray);
    console.log(e.target.name)
  }

  const toggleForecastDay = (e) => {
    //console.log('aa ' + e.currentTarget.dataset.index)
    setForecastDay(e.target.text);
    setweatherData({...forecastWeatherData[e.currentTarget.dataset.index]});
  }

  return (
    <>
    <div className={styles.wrapper}>
      <ToggleBox unitSystem={unit} changeUnitFunction={toggleUnit} weatherType={weatherType} 
        changeWeatherFunction={toggleWeatherType} displayDates={dayArray} choosenDay={forecastDay}
        toggleDay={toggleForecastDay} />  
    </div>

    <div className={styles.wrapper}>
      <MainCard weatherData={weatherData} unit={unit} />
      <ContentBox>
        <Header>
          <DateTime weatherData={weatherData} />
          <Search 
            placeHolder="Search a city..." 
            onFocus={(e) => {
              console.log('focus ' + e.target)
              e.target.value = "";
              e.target.placeholder = "";
            }}
            onChange={(e) => {
              setCity(e.target.value)
            }}
            onKeyDown={(e) => {
              e.keyCode === 13 && doRefresh(!isRefresh);
              e.target.placeholder = "Search a city...";
            }} 
          value={city}/>
        </Header>
        <MetricsBox weatherData={weatherData} unit={unit} />
        <UnitSearch unitSystem={'metric'} />
      </ContentBox>
    </div>
    </>
  );
}

export default App;
