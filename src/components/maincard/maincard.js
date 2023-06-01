import styles from "./maincard.module.css";
//import Image from "next/image";

export const MainCard = () => {
    return (
        <>
        <div className={styles.wrapper}>
            <h1 className={styles.location}>
                Bengaluru, India
            </h1>
            <p className={styles.description}>Some description</p>
            <img width="300px" height="300px" src='/icons/day.png'
                alt="weatherIcon"/>
            <h1 className={styles.temperature}>25°C</h1>
            <p>Feels like 20°C</p>    
        </div>
        
        </>
    );
}