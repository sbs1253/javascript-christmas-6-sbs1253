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
  MIN_DATE: 1,
  XMAS_DATE: 25,
  MAX_DATE: 31,
  YEAR: 2023,
  MONTH: 12,
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
