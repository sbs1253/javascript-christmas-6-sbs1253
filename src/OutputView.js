import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMenu() {
    Console.print('<주문 메뉴>');
    // ...
  },
  printTotalPrice() {
    Console.print('<할인 전 총주문 금액>');
    // ...
  },
  printGiftMenu() {
    Console.print('<증정 메뉴>');
    // ...
  },
  printBenefitDetails() {
    Console.print('<혜택 내역>');
    // ...
  },
  printTotalBenefitAmount() {
    Console.print('<총혜택 금액>');
    // ...
  },
  printEstimatedPaymentAmount() {
    Console.print('<할인 후 예상 결제 금액>');
    // ...
  },
  printDecemberEventBadge() {
    Console.print('<12월 이벤트 배지>');
    // ...
  },
  // ...
};
export default OutputView;
