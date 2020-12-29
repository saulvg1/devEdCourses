//base url
const base_url = 'https://api.rawg.io/api/';

//getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    //returns two digits every time
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  console.log(day);
  if (day < 10) {
    //returns two digits every time
    return `0${day}`;
  } else {
    return day;
  }
};
//current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentMonth}/${currentDay}/${currentYear}`;
//last year
const lastYear = `${currentMonth}/${currentDay}/${currentYear - 1}`;
//next year
const nextYear = `${currentMonth}/${currentDay}/${currentYear + 1}`;
//items per page
const itemsPerPage = 10;
//popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=${itemsPerPage}`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
