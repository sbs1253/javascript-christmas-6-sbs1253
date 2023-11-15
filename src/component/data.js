export const ORDER_PRICE_MENU = Object.freeze({
  APPETIZER: {
    양송이수프: 6000,
    타파스: 5500,
    시저샐러드: 8000,
  },
  MAIN: {
    티본스테이크: 55000,
    바비큐립: 54000,
    해산물파스타: 35000,
    크리스마스파스타: 25000,
  },
  DESSERT: {
    초코케이크: 15000,
    아이스크림: 5000,
  },
  DRINK: {
    제로콜라: 3000,
    레드와인: 60000,
    샴페인: 25000,
  },
});

export const DECEMBER_DATES = Object.freeze({
  MIN_DISCOUNT: 1000,
  EVERYDAY_DISCOUNT: 100,
  DAYWEEK_DISCOUNT: 2023,
  MIN_DATE: 1,
  XMAS_DATE: 25,
  MAX_DATE: 31,
  YEAR: 2023,
  MONTH: 12,
  WEEKDAY: '평일',
  WEEKEND: '주말',
  DAY: {
    0: '평일',
    1: '평일',
    2: '평일',
    3: '평일',
    4: '평일',
    5: '주말',
    6: '주말',
  },
});

export const GIFT_MENU = Object.freeze({
  GIFT_PRICE: 120000,
  CHAMPAGNE: '샴페인',
  GIFT_DISCOUNT: 25000,
});

export const EVENT_BADGE = Object.freeze({
  STAR_PRICE: 5000,
  TREE_PRICE: 10000,
  SANTA_PRICE: 20000,
  STAR: '별',
  TREE: '트리',
  SANTA: '산타',
});

export const PRECAUTIONS = Object.freeze({
  MIN_PRICE: 10000,
  ZERO_ORDER: 0,
  MIN_ORDER: 1,
  MAX_ORDER: 20,
});

export const ERROR_TEXT = Object.freeze({
  NUMBER: '[ERROR] 숫자는 1부터 31까지만 입력해 주세요.',
  NOT_NUMBER: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  MENU: '[ERROR] 메뉴는 1개이상 입력해 주세요',
  NOT_ORDER_TYPE: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
  NOT_ONLY_DRINK: '[ERROR] 음료만 주문할 수 없습니다. 다시 입력해 주세요.',
  MENU_MAX: '[ERROR] 메뉴는 최대 20개까지 입력가능합니다.',
});
export const INPUT_TEXT = Object.freeze({
  DATE: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  MENU: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});
export const OUTPUT_TEXT = Object.freeze({
  ORDER_MENU: '<주문 메뉴>',
  GIFT_MENU: '<증정 메뉴>',
  TOTAL_AMOUNT_BEFORE_DISCOUNT: '<할인 전 총주문 금액>',
  DISCOUNT_DETAILS: '<혜택 내역>',
  TOTAL_DISCOUNT_AMOUNT: '<총혜택 금액>',
  TOTAL_AMOUNT_AFTER_DISCOUNT: '<할인 후 예상 결제 금액>',
  EVENT_BADGE: '<12월 이벤트 배지>',
  XMAS: '크리스마스 디데이 할인: -',
  DAY_WEEK_DISCOUNT: ' 할인: -',
  SPECIAL: '특별 할인: -',
  GIFT: '증정 이벤트: -',
  NONE: '없음',
  NONE_AMOUNT: '0원',
  LOCALE: 'ko-KR',
  UNIT_QUANTITY: '개',
  UNIT_CURRENCY: '원',
});
export const INIT_VALUES = Object.freeze({
  INIT_NUMBER: 0,
  INIT_STRING: '',
});
