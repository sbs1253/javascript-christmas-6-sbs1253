import { Console } from '@woowacourse/mission-utils';
import { GIFT_MENU } from './component/data.js';

const OutputView = {
  printMenu(menu) {
    Console.print('<주문 메뉴>');
    menu.forEach(([item, quantity]) => {
      Console.print(`${item} ${quantity}개`);
    });
  },

  printGiftMenu(giftDiscount) {
    Console.print('<증정 메뉴>');
    if (giftDiscount) Console.print(giftDiscount);
    else Console.print('없음');
  },

  printTotalPrice(totalAmount) {
    Console.print('<할인 전 총주문 금액>');
    Console.print(`${totalAmount.toLocaleString('ko-KR')}원`);
  },
  printXmasDiscount(xmas) {
    if (xmas) {
      Console.print(
        `크리스마스 디데이 할인: -${xmas.toLocaleString('ko-KR')}원`,
      );
    } else {
      Console.print('없음');
    }
  },

  // 요일별 할인 정보 출력
  printDayWeekDiscount(dayWeek, dayWeekDiscount) {
    if (dayWeekDiscount) {
      Console.print(
        `${dayWeek} 할인: -${dayWeekDiscount.toLocaleString('ko-KR')}원`,
      );
    }
  },

  // 특별 할인 정보 출력
  printSpecialDiscount(special) {
    if (special) {
      Console.print(`특별 할인: -${special.toLocaleString('ko-KR')}원`);
    }
  },

  // 증정 이벤트 정보 출력
  printGiftDiscount(giftDiscount) {
    if (giftDiscount) {
      Console.print(
        `증정 이벤트: -${GIFT_MENU.GIFT_DISCOUNT.toLocaleString('ko-KR')}원`,
      );
    }
  },
  // 혜택 내역 출력
  printBenefitDetails(
    xmas = 0,
    special = 0,
    [dayWeek, dayWeekDiscount] = [0, 0],
    giftDiscount = 0,
  ) {
    Console.print('<혜택 내역>');
    this.printXmasDiscount(xmas);
    this.printDayWeekDiscount(dayWeek, dayWeekDiscount);
    this.printSpecialDiscount(special);
    this.printGiftDiscount(giftDiscount);
  },
  printTotalBenefitAmount(totalDiscountAmount) {
    Console.print('<총혜택 금액>');
    if (totalDiscountAmount) Console.print(`${-totalDiscountAmount}원`);
    else Console.print('0원');
  },

  printEstimatedPaymentAmount(paymentAmount) {
    Console.print('<할인 후 예상 결제 금액>');
    Console.print(`${paymentAmount.toLocaleString('ko-KR')}원`);
  },

  printDecemberEventBadge(eventBadge) {
    Console.print('<12월 이벤트 배지>');
    if (eventBadge) Console.print(`${eventBadge}`);
    else Console.print('없음');
  },
};
export default OutputView;
