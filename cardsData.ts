
  enum Rarity {COMMON, UNCOMMON, RARE, LEGENDARY};

  enum CardType {WEAPON, HELMET, ARMOR, SHIELD};

  interface Card {
    name: string,
    rarity: Rarity,
    cardType: CardType
  };

  let cards: Card[] = [
    { name: "commonWeapon1", rarity: Rarity.COMMON, cardType: CardType.WEAPON },
    { name: "commonHelmet1", rarity: Rarity.COMMON, cardType: CardType.HELMET},
    { name: "commonArmor1", rarity: Rarity.COMMON, cardType: CardType.ARMOR},
    { name: "commonShield1", rarity: Rarity.COMMON, cardType: CardType.SHIELD},
    { name: "commonWeapon2", rarity: Rarity.COMMON, cardType: CardType.WEAPON },
    { name: "commonHelmet2", rarity: Rarity.COMMON, cardType: CardType.HELMET},
    { name: "commonArmor2", rarity: Rarity.COMMON, cardType: CardType.ARMOR},
    { name: "commonShield2", rarity: Rarity.COMMON, cardType: CardType.SHIELD},
    { name: "uncommonWeapon1", rarity: Rarity.UNCOMMON, cardType: CardType.WEAPON },
    { name: "uncommonHelmet1", rarity: Rarity.UNCOMMON, cardType: CardType.HELMET},
    { name: "uncommonArmor1", rarity: Rarity.UNCOMMON, cardType: CardType.ARMOR},
    { name: "uncommonShield1", rarity: Rarity.UNCOMMON, cardType: CardType.SHIELD},
    { name: "uncommonWeapon2", rarity: Rarity.UNCOMMON, cardType: CardType.WEAPON },
    { name: "uncommonHelmet2", rarity: Rarity.UNCOMMON, cardType: CardType.HELMET},
    { name: "uncommonArmor2", rarity: Rarity.UNCOMMON, cardType: CardType.ARMOR},
    { name: "uncommonShield2", rarity: Rarity.UNCOMMON, cardType: CardType.SHIELD},
    { name: "rareWeapon1", rarity: Rarity.RARE, cardType: CardType.WEAPON },
    { name: "rareHelmet1", rarity: Rarity.RARE, cardType: CardType.HELMET},
    { name: "rareArmor1", rarity: Rarity.RARE, cardType: CardType.ARMOR},
    { name: "rareShield1", rarity: Rarity.RARE, cardType: CardType.SHIELD},
    { name: "rareWeapon2", rarity: Rarity.RARE, cardType: CardType.WEAPON },
    { name: "rareHelmet2", rarity: Rarity.RARE, cardType: CardType.HELMET},
    { name: "rareArmor2", rarity: Rarity.RARE, cardType: CardType.ARMOR},
    { name: "rareShield2", rarity: Rarity.RARE, cardType: CardType.SHIELD},
    { name: "legendaryWeapon1", rarity: Rarity.LEGENDARY, cardType: CardType.WEAPON },
    { name: "legendaryHelmet1", rarity: Rarity.LEGENDARY, cardType: CardType.HELMET},
    { name: "legendaryArmor1", rarity: Rarity.LEGENDARY, cardType: CardType.ARMOR},
    { name: "legendaryShield1", rarity: Rarity.LEGENDARY, cardType: CardType.SHIELD},
    { name: "legendaryWeapon2", rarity: Rarity.LEGENDARY, cardType: CardType.WEAPON },
    { name: "legendaryHelmet2", rarity: Rarity.LEGENDARY, cardType: CardType.HELMET},
    { name: "legendaryArmor2", rarity: Rarity.LEGENDARY, cardType: CardType.ARMOR},
    { name: "legendaryShield2", rarity: Rarity.LEGENDARY, cardType: CardType.SHIELD}
  ];


export default cards;