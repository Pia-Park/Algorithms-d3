
const talkingCalendar = function (date) {
    let months = ["January", "February", "March",
        "April", "May", "June", "July", "August",
        "September", "October", "November", "December"];
    let dateArray = date.split("/");

    let year = dateArray[0];
    let monthIndex = Number(dateArray[1]) - 1;
    let month = months[monthIndex];

    let dayNumber = Number(dateArray[2]);
    let dayOrdinal = "";
    if (dayNumber == 1 || dayNumber == 21 || dayNumber == 31) {
        dayOrdinal = dayNumber + "st";
    }
    else if (dayNumber == 2 || dayNumber == 22) {
        dayOrdinal = dayNumber + "nd";
    }
    else if (dayNumber == 3 || dayNumber == 23) {
        dayOrdinal = dayNumber + "rd";
    }
    else {
        dayOrdinal = dayNumber + "th";
    }

    let readableDate = month + " " + dayOrdinal + ", " + year;
    return readableDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));