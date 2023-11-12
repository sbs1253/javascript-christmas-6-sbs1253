import { DECEMBER_DATES, ERROR_TEXT } from './data.js';

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

export const menuValidation = (inputMenu) => {};
