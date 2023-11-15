import { Console } from '@woowacourse/mission-utils';
import ChristmasCountdown from '../../../src/component/discount/ChristmasCountdown.js';

describe('할인 기능 구현', () => {
  let christmasCountdown;

  beforeEach(() => {
    christmasCountdown = new ChristmasCountdown();
  });
  test('날짜 입력받기', async () => {
    const inputDate = 25;
    Console.readLineAsync = jest.fn();
    Console.readLineAsync.mockReturnValueOnce(inputDate);
    expect(await christmasCountdown.inputDate()).toBe(25);
  });

  test('하루에 100원씩 할인금액 적용', () => {
    const inputDate = 25;
    christmasCountdown.eventDate = inputDate;
    expect(christmasCountdown.xmasDiscount()).toBe(3400);
  });

  test('크리스마스까지만 하루에 100원씩 할인금액 적용', () => {
    const inputDate = 30;
    christmasCountdown.eventDate = inputDate;
    expect(christmasCountdown.xmasDiscount()).toBe(3400);
  });
});
