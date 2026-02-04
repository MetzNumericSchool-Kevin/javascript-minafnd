// Filtrage et sélection

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 0 },
  { nom: "Potion de force", prix: 60, stock: 3 },
  { nom: "Potion de vitesse", prix: 35, stock: 8 }
];
// - Créé un nouveau tableau `potions_en_stock` contenant **uniquement les potions avec stock > 0**
// - Créé un tableau `potions_abordables` avec les potions qui coûtent **moins de 40 🪙**
// - Affiche le nombre de potions dans chaque nouveau tableau
// - Affiche les tableaux créés dans la console

let potions_en_stock = [];
let potions_abordables = [];

for (potion of inventaire){
  if (potion.stock > 0){
    potions_en_stock.push(potion)
  }
  if (potion.prix < 40){
    potions_abordables.push(potion)
  }
}

console.log(`Nb de potions en stock : ${potions_en_stock.length}
  Nb de potions abordables : ${potions_abordables.length}`)
