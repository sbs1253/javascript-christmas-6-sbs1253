import { Console } from '@woowacourse/mission-utils';
import { GIFT_MENU, INIT_VALUES, OUTPUT_TEXT } from './component/data.js';

const OutputView = {
  printMenu(menu) {
    Console.print(OUTPUT_TEXT.ORDER_MENU);
    menu.forEach(([item, quantity]) => {
      Console.print(`${item} ${quantity}${OUTPUT_TEXT.UNIT_QUANTITY}`);
    });
  },

  printTotalPrice(totalAmount) {
    Console.print(OUTPUT_TEXT.TOTAL_AMOUNT_BEFORE_DISCOUNT);
    Console.print(
      `${totalAmount.toLocaleString(OUTPUT_TEXT.LOCALE)}${
        OUTPUT_TEXT.UNIT_CURRENCY
      }`,
    );
  },
  printGiftMenu(giftDiscount) {
    Console.print(OUTPUT_TEXT.GIFT_MENU);
    if (giftDiscount) Console.print(giftDiscount);
    else Console.print(OUTPUT_TEXT.NONE);
  },

  printXmasDiscount(xmas) {
    if (xmas) {
      Console.print(
        `${OUTPUT_TEXT.XMAS}${xmas.toLocaleString(OUTPUT_TEXT.LOCALE)}${
          OUTPUT_TEXT.UNIT_CURRENCY
        }`,
      );
    } else {
      Console.print(OUTPUT_TEXT.NONE);
    }
  },

  printDayWeekDiscount(dayWeek, dayWeekDiscount) {
    if (dayWeekDiscount) {
      Console.print(
        `${dayWeek} ${
          OUTPUT_TEXT.DAY_WEEK_DISCOUNT
        }${dayWeekDiscount.toLocaleString(OUTPUT_TEXT.LOCALE)}${
          OUTPUT_TEXT.UNIT_CURRENCY
        }`,
      );
    }
  },

  printSpecialDiscount(special) {
    if (special) {
      Console.print(
        `${OUTPUT_TEXT.SPECIAL}${special.toLocaleString(OUTPUT_TEXT.LOCALE)}${
          OUTPUT_TEXT.UNIT_CURRENCY
        }`,
      );
    }
  },

  printGiftDiscount(giftDiscount) {
    if (giftDiscount) {
      Console.print(
        `${OUTPUT_TEXT.GIFT}${GIFT_MENU.GIFT_DISCOUNT.toLocaleString(
          OUTPUT_TEXT.LOCALE,
        )}${OUTPUT_TEXT.UNIT_CURRENCY}`,
      );
    }
  },

  // 혜택 내역 출력
  printBenefitDetails(
    xmas = INIT_VALUES.INIT_NUMBER,
    special = INIT_VALUES.INIT_NUMBER,
    [dayWeek, dayWeekDiscount] = [
      INIT_VALUES.INIT_NUMBER,
      INIT_VALUES.INIT_NUMBER,
    ],
    giftDiscount = INIT_VALUES.INIT_NUMBER,
  ) {
    Console.print(OUTPUT_TEXT.DISCOUNT_DETAILS);
    this.printXmasDiscount(xmas);
    this.printDayWeekDiscount(dayWeek, dayWeekDiscount);
    this.printSpecialDiscount(special);
    this.printGiftDiscount(giftDiscount);
  },

  printTotalBenefitAmount(totalDiscountAmount) {
    Console.print(OUTPUT_TEXT.TOTAL_DISCOUNT_AMOUNT);
    if (totalDiscountAmount)
      Console.print(`${-totalDiscountAmount}${OUTPUT_TEXT.UNIT_CURRENCY}`);
    else Console.print(OUTPUT_TEXT.NONE_AMOUNT);
  },

  printEstimatedPaymentAmount(paymentAmount) {
    Console.print(OUTPUT_TEXT.TOTAL_AMOUNT_AFTER_DISCOUNT);
    Console.print(
      `${paymentAmount.toLocaleString(OUTPUT_TEXT.LOCALE)}${
        OUTPUT_TEXT.UNIT_CURRENCY
      }`,
    );
  },

  printDecemberEventBadge(eventBadge) {
    Console.print(OUTPUT_TEXT.EVENT_BADGE);
    if (eventBadge) Console.print(`${eventBadge}`);
    else Console.print(OUTPUT_TEXT.NONE);
  },
};
export default OutputView;
