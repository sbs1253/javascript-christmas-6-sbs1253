import { DECEMBER_DATES } from '../data.js';

const DayWeekDiscount = {
  dayDivide(date) {
    const startDate = new Date(2023, 12, date);

    return DECEMBER_DATES.DAY[startDate.getDay()];
  },
};
DayWeekDiscount.dayDivide(12);
