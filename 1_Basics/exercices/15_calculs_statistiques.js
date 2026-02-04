// Calculs et statistiques

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 7 },
  { nom: "Potion de force", prix: 60, stock: 3 }
];


let prix_total = 0 
let stock_total = 0;
let valeur_inventaire = 0;

for (potion of inventaire){
  stock_total = stock_total + potion.stock
  prix_total = prix_total + potion.prix
  valeur_inventaire = valeur_inventaire + (potion.prix * potion.stock)
}


let prix_moyen = prix_total / inventaire.length;

console.log(`Valeur de l'inventaire : ${valeur_inventaire}
Prix moyen des potions : ${prix_moyen}
Stock total de l'inventaire : ${stock_total}`)