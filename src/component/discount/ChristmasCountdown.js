import { DECEMBER_DATES } from '../data.js';
import InputView from '../../InputView.js';
import DayWeekDiscount from './DayWeekDiscount.js';

class ChristmasCountdown {
  // constructor() {}

  async inputDate() {
    this.eventDate = await InputView.readDate();
    return +this.eventDate;
  }

  async dicount() {
    this.eventDate = await this.inputDate();
    this.xmasDiscount();
    this.dayDiscount();
  }

  xmasDiscount() {
    const date =
      this.eventDate > DECEMBER_DATES.XMAS_DATE
        ? DECEMBER_DATES.XMAS_DATE
        : this.eventDate;
    const xmas = Array(date)
      .fill(100)
      .reduce((acc, d) => acc + d, -100);
    console.log(xmas);
    return xmas;
  }

  dayDiscount() {
    const discounts = new DayWeekDiscount(this.eventDate);
    console.log(discounts.discount);
  }
}
export default ChristmasCountdown;
