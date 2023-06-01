// import { degToCompass } from "../services/converters";
// import {
//   getTime,
//   getAMPM,
//   getVisibility,
//   getWindSpeed,
// } from "../services/helpers";
import { MetricsCard } from "../metricscard/metricscard";
import styles from "./metricsbox.module.css";

export const MetricsBox = () => {
  return (
    <div className={styles.wrapper}>
      <MetricsCard
        title={"Humidity"}
        iconSrc={"/icons/mild-rain.png"}
        metric={"10"}
        unit={"%"}
      />
      <MetricsCard
        title={"Wind speed"}
        iconSrc={"/icons/mild-rain.png"}
        metric={"6"}
        unit={"m/s"}
      />
      <MetricsCard
        title={"Wind direction"}
        iconSrc={"/icons/mild-rain.png"}
        metric={"NE"}
      />
      <MetricsCard
        title={"Visibility"}
        iconSrc={"/icons/mild-rain.png"}
        metric={"10"}
        unit={"km"}
      />
      <MetricsCard
        title={"Sunrise"}
        iconSrc={"/icons/mild-rain.png"}
        metric={"5:30"}
        unit={"AM"}
      />
      <MetricsCard
        title={"Sunset"}
        iconSrc={"/icons/mild-rain.png"}
        metric={"6:00"}
        unit={"PM"}
      />
    </div>
  );
};
