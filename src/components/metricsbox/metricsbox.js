// import { degToCompass } from "../services/converters";
// import {
//   getTime,
//   getAMPM,
//   getVisibility,
//   getWindSpeed,
// } from "../services/helpers";
import { MetricsCard } from "../metricscard/metricscard";
import styles from "./metricsbox.module.css";
import { WindCardinal, Visibility, TimeFromTs, WindSpeed, TimePeriod } from "../../util";
import PropTypes from 'prop-types';

export const MetricsBox = ({ weatherData, unit }) => {
  return (
    <div className={styles.wrapper}>
      { weatherData && Object.keys(weatherData).length != 0 && (
      <>  
      <MetricsCard
        title={"Humidity"}
        iconSrc={"/icons/mild-rain.png"}
        metric={weatherData.main.humidity}
        unit={"%"}
      />
      <MetricsCard
        title={"Wind speed"}
        iconSrc={"/icons/mild-rain.png"}
        metric={WindSpeed(weatherData.wind.speed, unit)}
        unit={unit==='metric'?'m/s':'mi/h'}
      />
      <MetricsCard
        title={"Wind direction"}
        iconSrc={"/icons/mild-rain.png"}
        metric={WindCardinal(weatherData.wind.deg)}
      />
      <MetricsCard
        title={"Visibility"}
        iconSrc={"/icons/mild-rain.png"}
        metric={Visibility(weatherData.visibility, unit)}
        unit={unit==='metric'?'km':'mi'}
      />
      <MetricsCard
        title={"Sunrise"}
        iconSrc={"/icons/mild-rain.png"}
        metric={TimeFromTs(weatherData.sys.sunrise, weatherData.timezone)}
        unit={TimePeriod(weatherData.sys.sunrise)}
      />
      <MetricsCard
        title={"Sunset"}
        iconSrc={"/icons/mild-rain.png"}
        metric={TimeFromTs(weatherData.sys.sunset, weatherData.timezone)}
        unit={TimePeriod(weatherData.sys.sunset)}
      /></>
      )}
    </div>
  );
};

MetricsBox.propTypes = {
  weatherData : PropTypes.object,
  unit : PropTypes.string
}
