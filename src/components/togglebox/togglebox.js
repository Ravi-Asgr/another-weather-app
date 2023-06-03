import styles from './togglebox.module.css';
import { FutureDays } from '../../util';
import { useState, useEffect } from 'react';

export const ToggleBox = () => {
    const [unit, setUnit] = useState('');
    const [isToday, setIsToday] = useState(true);
    const [isForecast, setIsForecast] = useState(false);
    const [dayArray, setDayArray] = useState([]);

    const toggleUnit = (e) => {
        setUnit(e.target.value);
    }

    const toggleForecastType = (e) => {
        if (e.target.name === 'today') {
            setIsToday(true);
            setIsForecast(false);
        } else {
            setIsToday(false);
            setIsForecast(true);
        }
    }

    useEffect(() => {
        let days = FutureDays(3);
        setDayArray(days);
    }, []);

    return (
        <><div className={styles.togglebox}>
            <h2 className={styles.unitlabel}>Unit</h2>    
            <div className={styles.metricflex}>    
                <input type="radio" id="task-1" name="task-1" value="metric" className={styles.metricrradio} onChange={toggleUnit} />
                <label htmlFor="task-1">Metric</label>
            </div>
            <div className={styles.metricflex}>    
                <input type="radio" id="task-1" name="task-1" value="imperial" className={styles.metricrradio} onChange={toggleUnit} />
                <label htmlFor="task-1">Imperial</label>
            </div>  
        </div>
        <div className={[styles.togglebox, styles.toggleboxright].join(' ')}>
            <h2 className={styles.unitlabel}>Report type</h2>    
            <div className={styles.metricflex} onClick={toggleForecastType}>    
                <a href="#" name="today" className={isToday ? [styles.btnclick, styles.btn].join(' ') : styles.btn}>Today</a>     
            </div>
                <div className={[styles.toggleboxequal, styles.togglebox].join(' ')}>
                    <div onClick={toggleForecastType}>
                        <a href="#" name="forecast" className={isForecast ? [styles.btnclick, styles.btn].join(' ') : styles.btn}>Forecast</a>
                    </div>
                    {
                        dayArray.length > 0 && (
                            <div className={[styles.metricflex, styles.aligncenter].join(' ')}>
                            <a href="#" className={[styles.datebtn, styles.btn].join(' ')}>{dayArray[0]}{unit}</a>
                            <a href="#" className={[styles.datebtn, styles.btn].join(' ')}>{dayArray[1]}</a>
                            <a href="#" className={[styles.datebtn, styles.btn].join(' ')}>{dayArray[2]}</a></div>
                        )
                    }
                </div> 
        </div></>
    );
};
