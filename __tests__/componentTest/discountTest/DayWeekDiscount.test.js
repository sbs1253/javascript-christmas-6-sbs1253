import DayWeekDiscount from '../../../src/component/discount/DayWeekDiscount';

describe('평일 주말 별이있는날 구분', () => {
  let dayWeekDiscount;
  let dayWeek;
  let special;

  const dayWeekDiscountGet = (eventDate) => {
    dayWeekDiscount = new DayWeekDiscount(eventDate);
    dayWeek = dayWeekDiscount.divide;
    special = dayWeekDiscount.discount;
  };

  test('평일일경우 "평일"로 나오는지 테스트', () => {
    const eventDate = 5;
    dayWeekDiscountGet(eventDate);
    expect(dayWeek).toBe('평일');
  });
  test('주말일경우 "주말"로 나오는지 테스트', () => {
    const eventDate = 9;
    dayWeekDiscountGet(eventDate);
    expect(dayWeek).toBe('주말');
  });

  test('별이있는날 추가할인 테스트', () => {
    const eventDate = 25;
    dayWeekDiscountGet(eventDate);
    expect(special).toBe(1000);
  });
});
