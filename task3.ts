import cards from './cardsData'

const fs = require('fs');

let inventory = [];//пустой массив, в который будут добавляться карты и паки

let result = [];

const getInventory = () => { //Считывает массив из inventory.json и пушит его в inventory[]
  let inventoryJson = fs.readFileSync('inventory.json').toString();
  if (inventoryJson != '') {//если inventory.json не пустой, копируем из него массив в inventory[]
  let prevInventory = JSON.parse(inventoryJson);
  inventory = prevInventory;
  } 
};

const openFairPack = (rarity: number) => {
  if (rarity > 0 && rarity <= 4) {
    let initialRarity: number = rarity;
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
      let amountOfFairRandoms: number = 1;
      let fairRandom = Math.floor(Math.random() * 23);
      if (fairRandom >= 0 && fairRandom < 4 && inventory.some(item => item.name === randomCard.name)) {//алгоритм для получения всех предметов
      //нужной редкости за 24 пака
        for (let x: number = 0; x === amountOfFairRandoms; x++) {
          if (!inventory.some(item => item.name === randomCard.name)) {
            return randomCard; 
          } else { amountOfFairRandoms++ }
        }
      }
      result.push(randomCard);
      rarity = initialRarity;
    }
    for (let i:number = 0; i < 3; i++) {
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

const addCards = () => {//Открывает пак, редкость которого объявлена в openFairPack() и, при условии получения
// новой карты, добавляет карты из этого пака в инвентарь
  openFairPack(3); //можно написать любую редкость(0-4) в соответствии с enum Rarity(cardsData.ts)
  let newCards = result.map (x => {
    x.type = 'card';
    return x;
  })
  for (let j: number = 0; j < result.length; j++) {
     if (!inventory.some(item => item.name === newCards[j].name)) { 
      inventory.push(newCards[j]); 
    }
  }
  return newCards;
};

const addPack = (rarity: number, quantity: number) => {//Добавляет паки в инвентарь. 
//Первый параметр - редкость(0-4) в соответствии с enum Rarity(cardsData.ts), второй - количество паков
  if (rarity > 0 && rarity < 4 && quantity >= 0) {
    inventory.push({type: 'pack', rarity: rarity, quantity: quantity});
  }
};

let recordNewInventory = () => {//преобразует обновленный inventory[] в строку и заменяет ей старый инвентарь в inventory.json
  fs.readFile('inventory.json', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        const json = JSON.stringify(inventory);
        fs.writeFile('inventory.json', json, 'utf8', function(){});
    }
  })
};

getInventory(); //Считывает массив из inventory.json и пушит его в inventory[]

addPack(1, 4);//Добавляет паки в инвентарь. 
//Первый параметр - редкость(0-4) в соответствии с enum Rarity(cardsData.ts), второй - количество

addCards();//Открывает пак, редкость которого объявлена в openFairPack() внутри функции и, при условии получения
// новой карты, добавляет карты из этого пака в инвентарь

recordNewInventory();//преобразует обновленный inventory[] в строку и заменяет ей старый инвентарь в inventory.json

console.log(inventory);

