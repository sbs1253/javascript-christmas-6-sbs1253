/* eslint-disable no-restricted-syntax */
import { ORDER_PRICE_MENU } from '../data.js';
import InputView from '../../InputView.js';
import OutputView from '../../OutputView.js';

class MenuCalculation {
  constructor() {
    this.prices = this.dataMenuGet();
  }

  async inputmenu() {
    const inputMenu = await InputView.readMenu();
    const menu = inputMenu.split(',').map((item) => item.split('-'));
    OutputView.printMenu(...menu);
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
    const menu = await this.inputmenu();
    let totalAmount = 0;
    menu.forEach(([item, quantity]) => {
      totalAmount += this.matchingMenu([item, quantity]);
    });
    OutputView.printTotalPrice(totalAmount);
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
}

export default MenuCalculation;
