import styles from "./metricscard.module.css";
import PropTypes from 'prop-types';

export const MetricsCard = ({ title, iconSrc, metric, unit }) => {
  return (
    <div className={styles.wrapper}>
      <p>{title}</p>
      <div className={styles.content}>
        <img width="100px" height="100px" src={iconSrc} alt="weatherIcon" />
        <div>
          <h1>{metric}</h1>
          <p>{unit}</p>
        </div>
      </div>
    </div>
  );
}

MetricsCard.propTypes = {
  title : PropTypes.string,
  iconSrc : PropTypes.string,
  metric : PropTypes.string,
  unit : PropTypes.string
}