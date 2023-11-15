import ChristmasCountdown from '../discount/ChristmasCountdown.js';
import MenuCalculation from './MenuCalculation.js';
import OutputView from '../../OutputView.js';
import { PRECAUTIONS, GIFT_MENU, EVENT_BADGE, INIT_VALUES } from '../data.js';

class TotalDiscount {
  constructor() {
    this.total = INIT_VALUES.INIT_NUMBER;
    this.xmas = INIT_VALUES.INIT_NUMBER;
    this.dayWeek = INIT_VALUES.INIT_STRING;
    this.special = INIT_VALUES.INIT_NUMBER;
    this.dayWeekDiscount = INIT_VALUES.INIT_NUMBER;
  }

  async play() {
    const christmasCountdown = new ChristmasCountdown();
    await christmasCountdown.discount();
    const menuCalculation = new MenuCalculation();
    this.total = await menuCalculation.menuPriceGet();
    this.menu = menuCalculation.menu;
    this.xmas = christmasCountdown.xmas;
    [this.dayWeekDiscount, this.special, this.dayWeek] =
      christmasCountdown.dayDiscount();

    this.outputOrderAmount();
  }

  outputOrderAmount() {
    if (this.total >= PRECAUTIONS.MIN_PRICE) {
      this.addDiscountList();
    } else this.noDiscountList();
  }

  addDiscountList() {
    const giftDiscount =
      this.total >= GIFT_MENU.GIFT_PRICE
        ? GIFT_MENU.CHAMPAGNE
        : INIT_VALUES.INIT_NUMBER;
    const totalDiscountAmount = this.xmas + this.special + this.dayWeekDiscount;
    const totalBenefitAmount = giftDiscount
      ? totalDiscountAmount + GIFT_MENU.GIFT_DISCOUNT
      : totalDiscountAmount;
    const eventBadge = this.eventBadgeGet(totalBenefitAmount);
    this.Output(
      giftDiscount,
      totalDiscountAmount,
      eventBadge,
      totalBenefitAmount,
    );
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

  Output({
    giftDiscount = INIT_VALUES.INIT_NUMBER,
    totalDiscountAmount = INIT_VALUES.INIT_NUMBER,
    eventBadge = INIT_VALUES.INIT_STRING,
    totalBenefitAmount = INIT_VALUES.INIT_NUMBER,
  }) {
    OutputView.printMenu(this.menu);
    OutputView.printTotalPrice(this.total);
    OutputView.printGiftMenu(giftDiscount);
    OutputView.printBenefitDetails(
      this.xmas,
      this.special,
      [this.dayWeek, this.dayWeekDiscount],
      giftDiscount,
    );
    OutputView.printTotalBenefitAmount(totalBenefitAmount);
    OutputView.printEstimatedPaymentAmount(this.total - totalDiscountAmount);
    OutputView.printDecemberEventBadge(eventBadge);
  }

  eventBadgeGet(totalBenefitAmount) {
    let badge = INIT_VALUES.INIT_STRING;
    if (totalBenefitAmount > EVENT_BADGE.SANTA_PRICE) {
      badge = EVENT_BADGE.SANTA;
    } else if (totalBenefitAmount > EVENT_BADGE.TREE_PRICE) {
      badge = EVENT_BADGE.TREE;
    } else if (totalBenefitAmount > EVENT_BADGE.STAR_PRICE) {
      badge = EVENT_BADGE.STAR;
    }
    return badge;
  }
}

export default TotalDiscount;
