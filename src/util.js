export const FutureDays = (x) => {
    let date = new Date();
    
    let dateArray = [];
    for (var i = 1; i<=x; i++) {
        let loopDate = new Date(date);
        loopDate.setDate(date.getDate() + i);
        dateArray.push(loopDate.toLocaleString('en-us',{month:'short', day:'numeric'}));
    } 
    return dateArray;
}

export const DateFromTs = (ts, shift) => {
    let date = new Date((ts + shift) * 1000);
    return date.toLocaleDateString('en-us', {month:'short', day:'numeric', year:'2-digit'});
}

export const TimeFromTs = (ts, shift) => {
    let date = new Date((ts + shift) * 1000);
    console.log (date.toISOString().match(/\d\d:\d\d/));
    return date.toISOString().match(/\d\d:\d\d/)[0];
}

export const TimePeriod = (ts) => {
    let date = new Date(ts * 1000);
    let dateString = date.toLocaleString('UTC', {hour: "numeric", minute: "numeric", hour12: true});
    return dateString.includes('AM') ? 'AM' : 'PM';
}

export const TempWitUnit = (value, unit) => {
    if (unit === 'metric') {
        return value.toFixed(0)+'°C';
    } else {
        return ((value * 9/5) + 32).toFixed(0)+'°F';
    }
}

export const WindSpeed = (value, unit) => {
    console.log('ssss ' + value + ' ' + unit)
    if (unit === 'metric') {
        return value.toFixed(0);
    } else {
        return (value * 2.2369).toFixed(0);
    }
}

export const WindCardinal = (angle) => {
    let arr = [
        "N",    //0
        "NNE",  //0-22.5
        "NE",   //22.5-45
        "ENE",  //45-67.5 
        "E",    //67.5-90
        "ESE",  //90-112.5
        "SE",   //112.5-135
        "SSE",  //135-157.5
        "S",    //157.5-180
        "SSW",  //180-202.5
        "SW",   //202.5-225
        "WSW",  //225-247.5
        "W",    //247.5-270
        "WNW",  //270-292.5
        "NW",   //292.5-315
        "NNW",  //315-337.5
        "N"     //337.5-360
    ];
    let val = Math.round(angle/22.5);
    return arr[val];
}

export const Visibility = (value, unit) => {
    return unit === 'metric' ? (value/1000).toFixed(1) : (value/1609.344).toFixed(1);
}

export const FormattedForecast = async (forecastWeather) => {
    let factoredResponse = [];
    let dataArray = forecastWeather.list;
    let startDate = new Date();
    let utcStartDate = new Date(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate());
    dataArray.forEach(ele => {
        let dayWeather = {};
        let sys = {};
        dayWeather.sys = sys;
        let eleTs = new Date((ele.dt)*1000);
        let utcEleTs = new Date(eleTs.getUTCFullYear(), eleTs.getUTCMonth(), eleTs.getUTCDate());
        if (utcEleTs > utcStartDate) {
            dayWeather.main = ele.main;
            dayWeather.weather = ele.weather;
            dayWeather.visibility = ele.visibility;
            dayWeather.wind = ele.wind;
            dayWeather.dt = ele.dt;
            dayWeather.stringdate = ele.dt_txt;
            dayWeather.timezone = forecastWeather.city.timezone;
            dayWeather.name = forecastWeather.city.name; 
            dayWeather.sys.country = forecastWeather.city.country;
            dayWeather.sys.sunrise = forecastWeather.city.sunrise;
            dayWeather.sys.sunset = forecastWeather.city.sunset;
            factoredResponse.push(dayWeather);
            utcStartDate = utcEleTs;
        }
    });  
    return factoredResponse;     
}

export const FutureDates = (x) => {
    let date = new Date();
    let dateArray = [];
    for (var i = 1; i<=x; i++) {
        let loopDate = new Date(date);
        loopDate.setDate(date.getDate() + i);
        dateArray.push(loopDate.toLocaleString('en-us',{month:'short', day:'numeric'}));
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dateArray);
        }, 7000);
    });
}