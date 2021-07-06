export const getCurrentMonth = (m) => {
  switch (m) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "Noveber";
    case 11:
      return "December";
    default:
      return "";
  }
};

export const getCurrentDay = (d) => {
  switch (d) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "";
  }
};

//   let unix_timestamp = 1625541655;
//   // Create a new JavaScript Date object based on the timestamp
//   // multiplied by 1000 so that the argument is in milliseconds, not seconds.
//   var date = new Date(unix_timestamp * 1000);
//   // Hours part from the timestamp
//   var hours = date.getHours();
//   // Minutes part from the timestamp
//   var minutes = "0" + date.getMinutes();
//   // Seconds part from the timestamp
//   var seconds = "0" + date.getSeconds();

//   // Will display time in 10:30:23 format
//   var formattedTime =
//     hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

//   console.log(formattedTime);

export const getTime = (t) => {
  var date = new Date(t * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  return `${hours} : ${minutes.substr(-2)}`;
};

export const getHour = (t) => {
  var date = new Date(t * 1000);
  var hours = date.getHours();
  if (hours >= 0 && hours < 10) {
    return `0${hours}`;
  } else {
    return `${hours}`;
  }
};

export const convertToTime = (t) => {
  return new Date(t * 1000);
};
