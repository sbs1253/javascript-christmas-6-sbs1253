import ChristmasCountdown from '../discount/ChristmasCountdown.js';
import MenuCalculation from './MenuCalculation.js';
import OutputView from '../../OutputView.js';
import { ORDER_PRICE_MENU, GIFT_MENU, EVENT_BADGE } from '../data.js';

class TotalDiscount {
  constructor() {
    this.total = 0;
    this.xmas = 0;
    this.dayWeek = '';
    this.special = 0;
    this.dayWeekDiscount = 0;
  }

  async play() {
    const christmasCountdown = new ChristmasCountdown();
    await christmasCountdown.discount();
    const menuCalculation = new MenuCalculation();
    this.total = await menuCalculation.menuPriceGet();
    this.menu = menuCalculation.menu;
    this.xmas = christmasCountdown.xmas;
    this.dayWeek = christmasCountdown.dayWeek;
    this.special = christmasCountdown.special;

    this.dayWeekDiscountCalculation();
    this.minimumOrderAmount();
  }

  addDiscountList() {
    const giftDiscount = this.total >= GIFT_MENU.GIFT_PRICE ? GIFT_MENU.CHAMPAGNE : 0;
    const totalDiscountAmount = this.xmas + this.special + this.dayWeekDiscount;
    const totalBenefitAmount = giftDiscount ? totalDiscountAmount + GIFT_MENU.GIFT_DISCOUNT : totalDiscountAmount;
    const eventBadge = this.eventBadgeGet(totalBenefitAmount);
    this.Output(giftDiscount, totalDiscountAmount, eventBadge, totalBenefitAmount);
  }

  noDiscountList() {
    OutputView.printMenu(this.menu);
    OutputView.printTotalPrice(this.total);
    OutputView.printGiftMenu();
    OutputView.printBenefitDetails();
    OutputView.printTotalBenefitAmount();
    OutputView.printEstimatedPaymentAmount(this.total);
    OutputView.printDecemberEventBadge();
  }

  Output({ giftDiscount = 0, totalDiscountAmount = 0, eventBadge = '', totalBenefitAmount = 0 }) {
    OutputView.printMenu(this.menu);
    OutputView.printTotalPrice(this.total);
    OutputView.printGiftMenu(giftDiscount);
    OutputView.printBenefitDetails(this.xmas, this.special, [this.dayWeek, this.dayWeekDiscount], giftDiscount);
    OutputView.printTotalBenefitAmount(totalBenefitAmount);
    OutputView.printEstimatedPaymentAmount(this.total - totalDiscountAmount);
    OutputView.printDecemberEventBadge(eventBadge);
  }

  minimumOrderAmount() {
    if (this.total >= 10000) {
      this.addDiscountList();
    } else this.noDiscountList();
  }

  eventBadgeGet(totalBenefitAmount) {
    let badge = '';
    if (totalBenefitAmount > EVENT_BADGE.SANTA_PRICE) {
      badge = EVENT_BADGE.SANTA;
    } else if (totalBenefitAmount > EVENT_BADGE.TREE_PRICE) {
      badge = EVENT_BADGE.TREE;
    } else if (totalBenefitAmount > EVENT_BADGE.STAR_PRICE) {
      badge = EVENT_BADGE.STAR;
    }
    return badge;
  }

  dayWeekDiscountCalculation() {
    const [main, dessert] = this.menuTypeSharing();
    this.dayWeekDiscount = 2023;

    if (this.dayWeek === '평일') this.dayWeekDiscount *= dessert;
    if (this.dayWeek === '주말') this.dayWeekDiscount *= main;
    return this.dayWeekDiscount;
  }

  menuTypeSharing() {
    let main = 0;
    let dessert = 0;
    this.menu.forEach(([item, quantity]) => {
      if (item in ORDER_PRICE_MENU.MAIN) {
        main += +quantity;
      }
      if (item in ORDER_PRICE_MENU.DESSERT) {
        dessert += +quantity;
      }
    });
    return [main, dessert];
  }
}

export default TotalDiscount;
