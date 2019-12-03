import cards from './cardsData'

const openPack = (rarity: number) => {
  if (rarity > 0 && rarity <= 3) {
    let initialRarity: number = rarity;
    let result = [];
    for (let i:number = 0; i < 2; i++) {
      let testYourLuck = Math.floor(Math.random() * 1000);
      if ((testYourLuck >= 0) && (testYourLuck < 100)) {
        rarity = rarity + 1;
      } else if ((testYourLuck >= 100) && (testYourLuck < 110)) {
        rarity = rarity + 2;
      } else if (testYourLuck === 110) {
        rarity = rarity + 3;
      } 
      if (rarity > 3) {
        rarity = 3;
      }
      let filterByRarity =  cards.filter(card =>  card.rarity === rarity);
      const randomCard = filterByRarity[Math.floor(Math.random() * filterByRarity.length)];
      result.push(randomCard);
      rarity = initialRarity;
    }
    let amountOfRepeats: number = 0;//переменная, хранящая в себе количество повторов типов карт
    let amountOfRandoms: number = 3;//количество карт редкости ниже редкости пака на, которые нужно рандомить
    if (result[0].cardType === result[1].cardType) {amountOfRepeats = 1};
    for (let i:number = 0; i < amountOfRandoms; i++) {
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
      if (amountOfRepeats === 1 && result[result.length - 1].cardType === result[0].cardType) {//сравнения типов карт для избежания повторов
        let popped = result.pop();//если рандомится карта с повторяющимся во второй раз типом, удаляет ее из массива result 
        amountOfRandoms++;//после удаления последней карты из массива, увеличивает количество карт, чтобы в результате их было пять
      }
      if (result.length === 4 && result[2].cardType === result[3].cardType) {
        let poped = result.pop();
        amountOfRandoms++;
      }
      if (result.length === 5 && result[2].cardType === result[4].cardType) {
        let poped = result.pop();
        amountOfRandoms++;
      }
      if (result.length === 5 && result[3].cardType === result[4].cardType) {
        let poped = result.pop();
        amountOfRandoms++;
      }
    }
    return result;
  } else {
    console.log('Incorrect rarity chosen!')
  }
};

console.log(openPack(3));


