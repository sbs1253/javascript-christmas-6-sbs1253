import { Console } from '@woowacourse/mission-utils';
import MenuCalculation from '../../../src/component/calculation/MenuCalculation.js';

describe('메뉴 계산 테스트', () => {
  let menuCalculation;
  beforeEach(() => {
    menuCalculation = new MenuCalculation();
  });

  test('메뉴 받아오기', async () => {
    const menu = '타파스-1';
    Console.readLineAsync = jest.fn();
    Console.readLineAsync.mockReturnValueOnce(menu);
    expect(await menuCalculation.inputmenu()).toEqual([['타파스', '1']]);
  });
});
