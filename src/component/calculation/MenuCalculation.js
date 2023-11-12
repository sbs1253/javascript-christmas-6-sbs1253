function MenuCalculation(inputMenu) {
  const menu = inputMenu.split(',').map((item) => item.split('-'));
  console.log(menu);
}

export default MenuCalculation;
