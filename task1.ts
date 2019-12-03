import cards from './cardsData'//импортируем отдельный файл, в котором хранится массив со всеми картами

const openPack = (rarity: number) => {
  if (rarity > 0 && rarity <= 4) {//проверка на правильный ввод редкости(0-3, в соответствии с enum Rarity(cardsData.ts))
    let initialRarity: number = rarity; //запоминаем изначальное значение rarity
    let result = [];//массив, в который записываются результаты открытия пака
    for (let i:number = 0; i < 2; i++) { //добавляем в массив две карты, редкость которых равна редкости пака
      let testYourLuck = Math.floor(Math.random() * 1000);//добавляем вероятность повысить редкость
      if ((testYourLuck >= 0) && (testYourLuck < 100)) {
        rarity = rarity + 1;
      } else if ((testYourLuck >= 100) && (testYourLuck < 110)) {
        rarity = rarity + 2;
      } else if (testYourLuck === 110) {
        rarity = rarity + 3;
      } 
      if (rarity > 3) {
        rarity = 3;//максимальная редкость - 3, если открываем пак редкости 3, аннулируем повышение редкости
      }
      let filterByRarity =  cards.filter(card =>  card.rarity === rarity);//оставляем в массиве карт только карты нужной редкости
      const randomCard = filterByRarity[Math.floor(Math.random() * filterByRarity.length)];//из массива карт нужной редкости, выбираем случайную карту
      //и сохраняем в объект 
      result.push(randomCard);// пушим объект в массив
      rarity = initialRarity;//если сработало повышение редкости, возвращаем ее к исходному значению
    }
    for (let i:number = 0; i < 3; i++) {//добавляем в массив три карты, редкость которых меньше редкости пака на один
      let testYourLuck = Math.floor(Math.random() * 1000);
      if ((testYourLuck > 110)) {
        rarity = rarity - 1;
      } else if ((testYourLuck >= 100) && (testYourLuck < 110)) {
        rarity = rarity + 1;
      } else if (testYourLuck === 110) {
        rarity = rarity + 2;
      } 
      if (rarity > 3) {
        rarity = 3;
      }
      let filterByRarity =  cards.filter(card =>  card.rarity === rarity);
      const randomCard = filterByRarity[Math.floor(Math.random() * filterByRarity.length)];
      result.push(randomCard);
      rarity = initialRarity;
    }
    return result;
  } else {
    console.log('Incorrect rarity chosen!')
  }
};

console.log(openPack(1));


