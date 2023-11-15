import { Console } from '@woowacourse/mission-utils';
import TotalDiscount from '../../../src/component/calculation/TotalDiscount';

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

describe('출력 테스트 ', () => {
  let totalDiscount;
  let logSpy;
  beforeEach(() => {
    totalDiscount = new TotalDiscount();
    logSpy = getLogSpy();
  });

  describe('평일 주말 할인 적용 테스트', () => {
    test('평일에 디저트메뉴 1개당 2,023원 할인 테스트', async () => {
      const menu = ['티본스테이크-1, 제로콜라-1, 아이스크림-2'];
      const date = 5;
      const input = [date, ...menu];
      const output = ['평일 할인: ', '-4,046원'];
      mockQuestions(input);
      await totalDiscount.play();

      output.forEach((text) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(text));
      });
    });

    test('주말에 메인 메뉴 1개당 2,023원 할인 테스트', async () => {
      const menu = ['티본스테이크-3, 제로콜라-1, 아이스크림-1'];
      const date = 22;
      const input = [date, ...menu];
      const output = ['주말 할인: ', '-6,069원'];
      mockQuestions(input);
      await totalDiscount.play();

      output.forEach((text) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(text));
      });
    });

    test('12만원이상 주문시 샴페인 증정 출력 테스트', async () => {
      const menu = [
        '시저샐러드-3, 티본스테이크-3, 크리스마스파스타-1, 제로콜라-3, 아이스크림-1',
      ];
      const date = 5;
      const input = [date, ...menu];
      const output = ['<증정 메뉴>', '샴페인'];
      mockQuestions(input);
      await totalDiscount.play();

      output.forEach((text) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(text));
      });
    });
  });

  describe('금액별 할인 적용 테스트', () => {
    test('10,000원 이상 주문시 출력 테스트', async () => {
      const menu = [
        '시저샐러드-1, 티본스테이크-1, 크리스마스파스타-1, 제로콜라-3, 아이스크림-1',
      ];
      const date = 5;
      const input = [date, ...menu];
      const output = [
        '<주문 메뉴>',
        '시저샐러드 1개',
        '티본스테이크 1개',
        '크리스마스파스타 1개',
        '제로콜라 3개',
        '아이스크림 1개',
        '<할인 전 총주문 금액>',
        '102,000원',
        '<증정 메뉴>',
        '없음',
        '<혜택 내역>',
        '크리스마스 디데이 할인: -1,400원',
        '평일 할인: -2,023원',
        '<총혜택 금액>',
        '-3423원',
        '<할인 후 예상 결제 금액>',
        '98,577원',
        '<12월 이벤트 배지>',
        '없음',
      ];
      mockQuestions(input);
      await totalDiscount.play();
      output.forEach((text) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(text));
      });
    });

    test('10,000원 이하 주문시 할인 미적용 테스트', async () => {
      const menu = ['시저샐러드-1'];
      const date = 25;
      const input = [date, ...menu];
      const output = [
        '<증정 메뉴>',
        '없음',
        '<혜택 내역>',
        '없음',
        '<총혜택 금액>',
        '없음',
      ];
      mockQuestions(input);
      await totalDiscount.play();

      output.forEach((text) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(text));
      });
    });
  });

  describe('할인 금액별 배지 부여 테스트', () => {
    test('할인금액 5천원 이상시 별 배지 증정', async () => {
      const menu = ['티본스테이크-1, 제로콜라-1, 아이스크림-3'];
      const date = 25;
      const input = [date, ...menu];
      const output = ['<12월 이벤트 배지>', '별'];
      mockQuestions(input);
      await totalDiscount.play();

      output.forEach((text) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(text));
      });
    });

    test('할인금액 1만원 이상시 트리 배지 증정', async () => {
      const menu = ['티본스테이크-1, 제로콜라-1, 아이스크림-5'];
      const date = 3;
      const input = [date, ...menu];
      const output = ['<12월 이벤트 배지>', '트리'];
      mockQuestions(input);
      await totalDiscount.play();

      output.forEach((text) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(text));
      });
    });

    test('할인금액 2만원 이상시 산타 배지 증정', async () => {
      const menu = ['티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1'];
      const date = 3;
      const input = [date, ...menu];
      const output = ['<12월 이벤트 배지>', '산타'];
      mockQuestions(input);
      await totalDiscount.play();

      output.forEach((text) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(text));
      });
    });
  });
});
