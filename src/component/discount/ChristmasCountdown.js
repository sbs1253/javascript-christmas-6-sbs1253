import { DECEMBER_DATES } from '../data.js';
import InputView from '../../InputView.js';
import DayWeekDiscount from './DayWeekDiscount.js';

class ChristmasCountdown {
  constructor() {
    this.xmas = 0;
    this.dayWeek = '';
    this.special = 0;
    this.eventDate = 0;
  }

  async inputDate() {
    this.eventDate = await InputView.readDate();
    return +this.eventDate;
  }

  async discount() {
    this.eventDate = await this.inputDate();
    this.xmas = this.xmasDiscount();
    this.dayDiscount();
  }

  xmasDiscount() {
    const date =
      this.eventDate > DECEMBER_DATES.XMAS_DATE
        ? DECEMBER_DATES.XMAS_DATE
        : this.eventDate;
    const xmas =
      Array(date)
        .fill(DECEMBER_DATES.EVERYDAY_DISCOUNT)
        .reduce((acc, cur) => acc + cur, DECEMBER_DATES.MIN_DISCOUNT) -
      DECEMBER_DATES.EVERYDAY_DISCOUNT;
    return xmas;
  }

  dayDiscount() {
    const dayWeekDiscount = new DayWeekDiscount(this.eventDate);
    this.dayWeek = dayWeekDiscount.divide;
    this.special = dayWeekDiscount.discount;
  }
}
export default ChristmasCountdown;
