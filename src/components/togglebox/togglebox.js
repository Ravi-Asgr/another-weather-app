import styles from './togglebox.module.css';
import { useState } from 'react';

export const ToggleBox = () => {
    const [unit, setUnit] = useState('');
    const [isActive, setIsActive] = useState(false);

    const toggleUnit = (e) => {
        setUnit(e.target.value);
    }

    const toggleForecastType = () => {
        setIsActive(isActive => !isActive);
    }

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
                <a href="#" className={isActive ? styles.btn : [styles.btnclick, styles.btn].join(' ')}>Today</a>     
            </div>
            <div className={styles.metricflex}>    
                <a href="#" className={styles.btn}>Forecast</a>
                Selected Unit : {unit}
            </div>  
        </div></>
    );
};
