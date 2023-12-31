import { DECEMBER_DATES } from '../data.js';

class DayWeekDiscount {
  // 월과 일은 0부터 시작함으로 -1을 해주는게 가독성에 좋음
  constructor(date) {
    this.startDate = new Date(
      DECEMBER_DATES.YEAR,
      DECEMBER_DATES.MONTH - 1,
      date,
    );
    this.divide = this.dayDivide(this.startDate);
    this.discount = this.specialDiscount(this.startDate);
  }

  dayDivide(date) {
    // 평일 주말 구분함수
    return DECEMBER_DATES.DAY[date.getDay()];
  }

  specialDiscount(date) {
    const day = date.getDay();
    let specialDiscount = 0;
    if (day === 0 || date.getDate() === 25) specialDiscount = 1000;
    return specialDiscount;
  }
}

export default DayWeekDiscount;
