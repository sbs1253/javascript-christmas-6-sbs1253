import MenuCalculation from './component/calculation/MenuCalculation.js';
import ChristmasCountdown from './component/discount/ChristmasCountdown.js';
import TotalDiscount from './component/calculation/TotalDiscount.js';

class App {
  async run() {
    const totalDiscount = new TotalDiscount();
    totalDiscount.play();
  }
}

export default App;
