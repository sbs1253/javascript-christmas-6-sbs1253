import { Console } from '@woowacourse/mission-utils';
import { GIFT_MENU } from './component/data.js';

const OutputView = {
  printMenu([item, quantity]) {
    Console.print('<주문 메뉴>');
    Console.print(`${item} ${quantity}개`);
  },
  printGiftMenu(totalAmount) {
    Console.print('<증정 메뉴>');
    if (totalAmount >= GIFT_MENU.GIFT_PRICE) Console.print(GIFT_MENU.샴페인);
    else Console.print('없음');
  },
  printTotalPrice(totalAmount) {
    Console.print('<할인 전 총주문 금액>');
    Console.print(`${totalAmount}원`);
    this.printGiftMenu(totalAmount);
  },

  printBenefitDetails() {
    Console.print('<혜택 내역>');
  },
  printTotalBenefitAmount() {
    Console.print('<총혜택 금액>');
  },
  printEstimatedPaymentAmount() {
    Console.print('<할인 후 예상 결제 금액>');
  },
  printDecemberEventBadge() {
    Console.print('<12월 이벤트 배지>');
  },
};
export default OutputView;
