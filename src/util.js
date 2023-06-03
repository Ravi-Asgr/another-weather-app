export const FutureDays = (x) => {
    let date = new Date();
    
    let dateArray = [];
    for (var i = 1; i<=x; i++) {
        let loopDate = new Date(date);
        loopDate.setDate(date.getDate() + i);
        dateArray.push(loopDate.toLocaleString('en-us',{month:'short', day:'numeric'}));
    } 
    console.log('sdsd')   
    return dateArray;
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