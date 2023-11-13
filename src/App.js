import MenuCalculation from './component/calculation/MenuCalculation.js';

class App {
  async run() {
    const menuCalculation = new MenuCalculation();
    menuCalculation.menuPriceGet();
  }
}

export default App;
