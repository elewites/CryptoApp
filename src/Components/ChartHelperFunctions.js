//EFFECTS: returns day of the week based on given parameter
const parseWeekDay = (weekDay) => {
  let day;
  switch (weekDay) {
    case 0:
      day = "Sun";
      break;
    case 1:
      day = "Mon";
      break;
    case 2:
      day = "Tues";
      break;
    case 3:
      day = "Wed";
      break;
    case 4:
      day = "Thu";
      break;
    case 5:
      day = "Fri";
      break;
    case 6:
      day = "Sat";
      break;
    default:
      day = null;
  }
  return day;
};

//EFFECTS: returns month based on given parameter
const parseMonth = (givenMonth) => {
  let month;
  switch (givenMonth) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sep";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;
    default:
      month = null;
  }
  return month;
};

//EFFECTS: parses a unix timestamp into a readable format;
//         output format e.g.  "Tue 26 Dec 2021, 20:09:15"
const parseTimeStamp = (timestamp) => {
  const newDate = new Date(timestamp);

  const weekDay = newDate.getDay();
  const parsedWeekDay = parseWeekDay(weekDay);

  const calendarDay = newDate.getDate();

  const month = newDate.getMonth();
  const parsedMonth = parseMonth(month);

  const year = newDate.getFullYear();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const seconds = newDate.getSeconds();

  //EFFECT: adds zero to parsedDate where needed
  const addZero = (timeUnit) => {
    if (timeUnit <= 9) {
      return "0";
    } else {
      return "";
    }
  };

  const parsedDate =
    parsedWeekDay +
    " " +
    calendarDay +
    " " +
    parsedMonth +
    " " +
    year +
    ", " +
    addZero(hours) +
    hours +
    ":" +
    addZero(minutes) +
    minutes +
    ":" +
    addZero(seconds) +
    seconds;

  return parsedDate;
};

export const parseTimeStampFunction = parseTimeStamp;
