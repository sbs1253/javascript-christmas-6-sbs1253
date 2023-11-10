import { DECEMBER_DATES } from '../data.js';

const ChristmasCountdown = {
  discount() {
    // DECEMBER_DATES.XMAS_DATE를 파라미터에 inputDate로 대체가능성
    const xmas = Array(DECEMBER_DATES.XMAS_DATE)
      .fill(100)
      .reduce((acc, d) => acc + d, -100);
    console.log(xmas);
    return xmas;
  },
};
ChristmasCountdown.discount();
export default ChristmasCountdown;
