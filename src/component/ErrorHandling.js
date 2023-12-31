import {
  DECEMBER_DATES,
  ERROR_TEXT,
  ORDER_PRICE_MENU,
  INIT_VALUES,
  PRECAUTIONS,
} from './data.js';

export const dateValidation = (inputDate) => {
  if (
    inputDate > DECEMBER_DATES.MAX_DATE ||
    inputDate < DECEMBER_DATES.MIN_DATE
  ) {
    throw new Error(ERROR_TEXT.NUMBER);
  }
  if (Number.isNaN(+inputDate)) {
    throw new Error(ERROR_TEXT.NOT_NUMBER);
  }
};

class Precautions {
  appetizer = INIT_VALUES.INIT_NUMBER;

  main = INIT_VALUES.INIT_NUMBER;

  dessert = INIT_VALUES.INIT_NUMBER;

  drink = INIT_VALUES.INIT_NUMBER;

  constructor(menu, menuName) {
    this.menu = menu;
    this.menuName = menuName;
  }

  menuValidation() {
    this.menuItemsGet();
    this.drinkOrderNotAllowed();
    this.maximumOrderLimit();
  }

  orderInAppetizer(item, quantity) {
    if (item in ORDER_PRICE_MENU.APPETIZER) {
      this.appetizer += +quantity;
    }
  }

  orderInMain(item, quantity) {
    if (item in ORDER_PRICE_MENU.MAIN) {
      this.main += +quantity;
    }
  }

  orderInDessert(item, quantity) {
    if (item in ORDER_PRICE_MENU.DESSERT) {
      this.dessert += +quantity;
    }
  }

  orderInDrink(item, quantity) {
    if (item in ORDER_PRICE_MENU.DRINK) {
      this.drink += +quantity;
    }
  }

  menuItemsGet() {
    this.menu.forEach(([item, quantity]) => {
      this.orderType(item, quantity);
      this.orderInAppetizer(item, quantity);
      this.orderInMain(item, quantity);
      this.orderInDessert(item, quantity);
      this.orderInDrink(item, quantity);
    });
  }

  orderType(item, quantity) {
    if (!this.menuName.some(([menu, _]) => item === menu)) {
      throw new Error(ERROR_TEXT.NOT_ORDER_TYPE);
    }
    if (!(quantity >= PRECAUTIONS.MIN_ORDER)) {
      throw new Error(ERROR_TEXT.NOT_ORDER_TYPE);
    }
  }

  drinkOrderNotAllowed() {
    const notDrink = this.main + this.dessert + this.appetizer;
    if (
      notDrink === PRECAUTIONS.ZERO_ORDER &&
      this.drink >= PRECAUTIONS.MIN_ORDER
    ) {
      throw new Error(ERROR_TEXT.NOT_ONLY_DRINK);
    }
  }

  maximumOrderLimit() {
    const totalMenuOrder =
      this.main + this.dessert + this.appetizer + this.drink;
    if (totalMenuOrder >= PRECAUTIONS.MAX_ORDER) {
      throw new Error(ERROR_TEXT.MENU_MAX);
    }
  }
}
export default Precautions;
