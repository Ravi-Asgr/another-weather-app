import styles from './togglebox.module.css';
//import { FutureDays } from '../../util';
import { ToggleBoxRadio } from '../toggleboxradio/toggleboxradio';
//import { useState } from 'react';
import PropTypes from 'prop-types';

export const ToggleBox = ({
        unitSystem, 
        changeUnitFunction, 
        weatherType, 
        changeWeatherFunction,
        displayDates, 
        choosenDay,
        toggleDay
    }) => {
    //const [unit, setUnit] = useState('');
    // const [isToday, setIsToday] = useState(true);
    // const [isForecast, setIsForecast] = useState(false);
    //const [dayArray, setDayArray] = useState([]);
    // const [firstDate, setFirstDate] = useState('');
    // const [secondDate, setSecondDate] = useState('');
    // const [thirdDate, setThirdDate] = useState('');

    // const toggleUnit = (e) => {
    //     setUnit(e.target.value);
    // }

    // const toggleForecastType = (e) => {
    //     if (e.target.name === 'today') {
    //         setIsToday(true);
    //         setIsForecast(false);
    //     } else {
    //         setIsToday(false);
    //         setIsForecast(true);
    //     }
    // }

    // const toggleForcastDate = (e) => {
    //     console.log(e.target.text)
    // }

    // useEffect(() => {
    //     let days = FutureDays(3);
    //     setDayArray(days);
    // }, []);

    return (
        <><div className={styles.togglebox}>
            <h2 className={styles.unitlabel}>Unit</h2>    
            <div className={styles.metricflex}> 
                <ToggleBoxRadio metric={'metric'} selectedMetric={unitSystem} changeUnitFunction={changeUnitFunction} />   
                {/* <input type="radio" id="task-1" name="task-1" value="metric" checked={unitSystem==='metric'} className={styles.metricrradio} onChange={changeUnitFunction} />
                <label htmlFor="task-1">Metric</label> */}
            </div>
            <div className={styles.metricflex}> 
                <ToggleBoxRadio metric={'imperial'} selectedMetric={unitSystem} changeUnitFunction={changeUnitFunction} />
                {/* <input type="radio" id="task-1" name="task-1" value="imperial" checked={unitSystem==='imperial'} className={styles.metricrradio} onChange={changeUnitFunction} />
                <label htmlFor="task-1">Imperial</label> */}
            </div>  
        </div>
        <div className={[styles.togglebox, styles.toggleboxright].join(' ')}>
            <h2 className={styles.unitlabel}>Report type</h2>    
            <div className={styles.metricflex} onClick={changeWeatherFunction}>    
                <a href="#" name="today" className={weatherType==="today" ? [styles.btnclick, styles.btn].join(' ') : styles.btn}>Today</a>     
            </div>
            <div className={[styles.toggleboxequal, styles.togglebox].join(' ')}>
                <div onClick={changeWeatherFunction}>
                    <a href="#" name="forecast" className={weatherType==="forecast" ? [styles.btnclick, styles.btn].join(' ') : styles.btn}>Forecast</a>
                </div>
                {
                    displayDates.length > 0 && (
                        <div className={weatherType==="forecast" 
                            ? [styles.metricflex, styles.aligncenter].join(' ') 
                            : [styles.metricflex, styles.aligncenter, styles.disabled].join(' ')}>
                            <a href="#" data-index={0} className={choosenDay===displayDates[0]?[styles.datebtn, styles.btn, styles.btnclick].join(' '):[styles.datebtn, styles.btn].join(' ')} onClick={toggleDay}>{displayDates[0]}</a>
                            <a href="#" data-index={1} className={choosenDay===displayDates[1]?[styles.datebtn, styles.btn, styles.btnclick].join(' '):[styles.datebtn, styles.btn].join(' ')} onClick={toggleDay}>{displayDates[1]}</a>
                            <a href="#" data-index={2} className={choosenDay===displayDates[2]?[styles.datebtn, styles.btn, styles.btnclick].join(' '):[styles.datebtn, styles.btn].join(' ')} onClick={toggleDay}>{displayDates[2]}</a>
                        </div>
                        )
                    }
            </div> 
        </div></>
    );
};


ToggleBox.propTypes = {
    unitSystem : PropTypes.string,
    changeUnitFunction : PropTypes.func,
    weatherType: PropTypes.string,
    changeWeatherFunction: PropTypes.func,
    displayDates: PropTypes.array,
    choosenDay: PropTypes.string,
    toggleDay: PropTypes.func
  }