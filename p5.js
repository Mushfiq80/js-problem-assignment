function waitingTime(waitingTimes, serialNumber) {
    if (Array.isArray(waitingTimes) && typeof serialNumber === 'number') {
        if (waitingTimes.length < serialNumber) {
            let sum = 0;
            for (const time of waitingTimes) {
                sum += time;
            }
            const meanSum = Math.round(sum / waitingTimes.length);
            const remain = serialNumber - waitingTimes.length - 1;
            return meanSum * remain;
        }
        else {
            return "Invalid Input";
        }
    }
    else {
        return "Invalid Input";
    }
}