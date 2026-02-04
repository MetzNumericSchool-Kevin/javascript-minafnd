// Tri simple

// Inventaire de la boutique (non trié)
const inventaire = [
  { nom: "Potion de force", prix: 60, stock: 3 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion d'endurance", prix: 40, stock: 7 }
];

// - Trie les potions par **prix croissant** (du moins cher au plus cher)
// - Affiche l'inventaire trié dans la console
// - Affiche un message pour chaque potion : `"<nom> : <prix> 🪙"`

// 💡 **Astuce** : Utilise deux boucles `for` imbriquées pour comparer et échanger les éléments (algorithme de tri à bulles simplifié). Pour échanger deux éléments d'un tableau :

// ```js
// let temp = inventaire[i];
// inventaire[i] = inventaire[j];
// inventaire[j] = temp;

for (let i= 0; i< inventaire.length -1; i++){
  if (inventaire[i+1].prix > inventaire[i].prix){
    let temp = inventaire[i];
    inventaire[i] = inventaire[i+1];
    inventaire[i+1] = temp;
  }
}


for (let i= 0; i< inventaire.length; i++){
  console.log(`${inventaire[i].nom} : ${inventaire[i].prix}`)
}