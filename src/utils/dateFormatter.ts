function getNumberOfDays(date: Date) {
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime =(new Date()).getTime() -  date.getTime() ;

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}


export default function dateFormatter(date: Date){
    const daysAgo = getNumberOfDays(date);
    const days = [
        "Poniedziałek",
        "Wtorek",
        "Środa",
        "Czwartek",
        "Piątek",
        "Sobota",
        "Niedziela"
    ]
    const dateObject = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        dayOfWeek: days[date.getDay()]
    }
    if(daysAgo===0){
        return 'dzisiaj'
    }
    if(daysAgo<=10){
        return `${daysAgo} ${daysAgo===1?"dzień":"dni"} temu`;
    }
    return `${dateObject.dayOfWeek}, ${dateObject.day}.${dateObject.month} ${dateObject.year}`
}