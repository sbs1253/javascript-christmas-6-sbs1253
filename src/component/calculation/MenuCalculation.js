/* eslint-disable no-restricted-syntax */
import { ORDER_PRICE_MENU } from '../data.js';
import InputView from '../../InputView.js';

class MenuCalculation {
  constructor() {
    this.prices = this.dataMenuGet();
    this.menu = [];
  }

  async inputmenu() {
    const inputMenu = await InputView.readMenu();
    const menu = inputMenu.split(',').map((item) => item.split('-'));
    return menu;
  }

  dataMenuGet() {
    const prices = Object.keys(ORDER_PRICE_MENU).flatMap((category) => {
      const price = Object.entries(ORDER_PRICE_MENU[category]);
      return price;
    });
    return prices;
  }

  async menuPriceGet() {
    this.menu = await this.inputmenu();
    let totalAmount = 0;
    this.menu.forEach(([item, quantity]) => {
      totalAmount += this.matchingMenu([item, quantity]);
    });
    this.menuType();
    return totalAmount;
  }

  matchingMenu([item, quantity]) {
    let total = 0;
    for (const [menuItem, price] of this.prices) {
      if (menuItem === item) {
        total += price * quantity;
      }
    }
    return total;
  }

  menuType() {
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

export default MenuCalculation;
