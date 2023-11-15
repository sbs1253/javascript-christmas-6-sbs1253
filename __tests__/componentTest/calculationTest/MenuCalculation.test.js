import { Console } from '@woowacourse/mission-utils';
import MenuCalculation from '../../../src/component/calculation/MenuCalculation.js';

describe('메뉴 총 금액 계산 구현', () => {
  let menuCalculation;
  beforeEach(() => {
    menuCalculation = new MenuCalculation();
  });

  test('메뉴 받아오기', async () => {
    const inputMenu = '타파스-1,제로콜라-1';
    Console.readLineAsync = jest.fn();
    Console.readLineAsync.mockReturnValueOnce(inputMenu);
    expect(await menuCalculation.inputmenu()).toEqual([
      ['타파스', '1'],
      ['제로콜라', '1'],
    ]);
  });

  test('메뉴 총 금액 계산', () => {
    const menu = [
      ['타파스', '1'],
      ['제로콜라', '1'],
    ];
    menuCalculation.menu = menu;
    const result = menuCalculation.totalAmountGet();
    expect(result).toBe(8500);
  });
});
