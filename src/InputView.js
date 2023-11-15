import { Console } from '@woowacourse/mission-utils';
import { dateValidation } from './component/ErrorHandling.js';
import { INPUT_TEXT } from './component/data.js';

const InputView = {
  async readDate() {
    try {
      const inputDate = await Console.readLineAsync(INPUT_TEXT.DATE);
      dateValidation(inputDate);
      return +inputDate;
    } catch (error) {
      Console.print(error.message);
      return await this.readDate();
    }
  },
  async readMenu() {
    const inputMenu = await Console.readLineAsync(INPUT_TEXT.MENU);
    return inputMenu;
  },
  // ...
};
export default InputView;
