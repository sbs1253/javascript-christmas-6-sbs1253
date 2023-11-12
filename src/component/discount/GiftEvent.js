import { GIFT_MENU } from '../data.js';

const GiftEvent = {
  totalAmount(Amount) {
    if (Amount > 120000) return GIFT_MENU.샴페인;
  },
};
export default GiftEvent;
