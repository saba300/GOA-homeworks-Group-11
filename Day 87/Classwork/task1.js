function startInterval() {
    const interval = setInterval(() => {
        let currentTime = new Date();
        let currentMinute = currentTime.getMinutes();
        
        console.log(currentTime); 

        if (currentMinute === 35) {
            clearInterval(interval);
            console.log("Interval stopped because the minute is 35");
        }
    }, 1000); 
}

startInterval();
