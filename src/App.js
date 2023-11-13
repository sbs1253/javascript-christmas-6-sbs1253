import MenuCalculation from './component/calculation/MenuCalculation.js';
import ChristmasCountdown from './component/discount/ChristmasCountdown.js';

class App {
  async run() {
    const christmasCountdown = new ChristmasCountdown();
    await christmasCountdown.dicount();
    // const menuCalculation = new MenuCalculation();
    // menuCalculation.menuPriceGet();
  }
}

export default App;
