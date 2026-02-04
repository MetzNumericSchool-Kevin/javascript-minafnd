// Recherche dans l'inventaire

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 0 },
  { nom: "Potion de force", prix: 60, stock: 3 },
];
let prix_max = 0
let potion_prix_max = ""
let stock_max = 0
let potion_stock_max = ""
let stock_positif = 0
for (potion of inventaire){
  if (potion.prix > prix_max){
    prix_max = potion.prix
    potion_prix_max = potion.nom
  }
}
for (potion of inventaire){
  if (potion.stock > stock_max){
    stock_max = potion.stock
    potion_stock_max = potion.nom
  }
}

for (potion of inventaire){
  if (potion.stock > 0){
    stock_positif ++
  }
}


console.log (`Potion la plus chère = ${potion_prix_max}`)
console.log (`Potion avec le plus gros stock = ${potion_stock_max}`)
console.log (`Nombre de potions avec un stock supérieur à 0 : ${stock_positif}`)