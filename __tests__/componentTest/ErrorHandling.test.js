import { Console } from '@woowacourse/mission-utils';
import TotalDiscount from '../../src/component/calculation/TotalDiscount';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
describe('날짜 입력 에러 테스트', () => {
  let totalDiscount;
  let logSpy;
  const ERROR_MESSAGE = '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.';

  beforeEach(() => {
    totalDiscount = new TotalDiscount();
    logSpy = getLogSpy();
  });

  test('날짜 범위 1~31내의 값이 아닐경우 에러출력', async () => {
    const menu = '해산물파스타-2';
    const date = [32, 31];
    const input = [...date, menu];
    mockQuestions(input);
    await totalDiscount.play();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(ERROR_MESSAGE));
  });

  test('날짜 값이 숫자가 아닐경우 에러출력', async () => {
    const menu = '해산물파스타-2';
    const date = ['1d', 31];
    const input = [...date, menu];
    mockQuestions(input);
    await totalDiscount.play();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(ERROR_MESSAGE));
  });
});
describe('메뉴 입력 에러 테스트', () => {
  let totalDiscount;
  let logSpy;
  const ERROR_MESSAGE = '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';
  const date = 23;

  beforeEach(() => {
    totalDiscount = new TotalDiscount();
    logSpy = getLogSpy();
  });

  test('메뉴판에 없는 메뉴 입력시 에러출력', async () => {
    const menu = ['교촌치킨-1', '해산물파스타-1'];

    const input = [date, ...menu];
    mockQuestions(input);
    await totalDiscount.play();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(ERROR_MESSAGE));
  });
  test('메뉴의 개수가 1이상이 아닐경우 에러출력', async () => {
    const menu = ['교촌치킨-0', '해산물파스타-1'];
    const input = [date, ...menu];
    mockQuestions(input);
    await totalDiscount.play();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(ERROR_MESSAGE));
  });
  test('메뉴 형식이 예시와 다른 경우 에러출력', async () => {
    const menu = ['교촌치킨-1제로콜라-1', '해산물파스타-1'];
    const input = [date, ...menu];
    mockQuestions(input);
    await totalDiscount.play();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(ERROR_MESSAGE));
  });
  test('중복 메뉴를 입력한 경우 에러출력', async () => {
    const menu = ['교촌치킨-1', '교촌치킨-1', '해산물파스타-1'];
    const input = [date, ...menu];
    mockQuestions(input);
    await totalDiscount.play();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(ERROR_MESSAGE));
  });
  test('음료만 주문 시 에러출력', async () => {
    const menu = ['제로콜라-1', '해산물파스타-1'];
    const input = [date, ...menu];
    mockQuestions(input);
    await totalDiscount.play();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        '[ERROR] 음료만 주문할 수 없습니다. 다시 입력해 주세요.',
      ),
    );
  });
  test('메뉴의 개수가 20개가 넘을 경우 에러출력', async () => {
    const menu = ['티본스테이트-21', '해산물파스타-1'];
    const input = [date, ...menu];
    mockQuestions(input);
    await totalDiscount.play();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(ERROR_MESSAGE));
  });
});
