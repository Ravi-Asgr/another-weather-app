import styles from "./datetime.module.css";
import PropTypes from 'prop-types';
import { DateFromTs } from "../../util";

export const DateTime = ({ weatherData }) => {
  return (
    <div className={styles.wrapper}>
      { weatherData && Object.keys(weatherData).length != 0 && (
        <h2>{DateFromTs(weatherData.dt, weatherData.timezone)}</h2>
      )}
    </div>
  );
};

DateTime.propTypes = {
  weatherData : PropTypes.object
}