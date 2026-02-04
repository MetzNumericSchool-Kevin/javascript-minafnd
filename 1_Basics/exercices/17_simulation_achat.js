// Mini-simulation d'achat

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 40, stock: 5 },
  { nom: "Potion de mana", prix: 20, stock: 3 },
  { nom: "Potion d'endurance", prix: 30, stock: 2 }
];

// Bourse de l'aventurier
let bourse_aventurier = 100;


let potion_souhaitee = Number(prompt(`Voici les articles disponibles dans notre magasin :
1 - ${inventaire[0].nom} - ${inventaire[0].prix} 🌒
2 - ${inventaire[1].nom} - ${inventaire[1].prix} 🌒
3 - ${inventaire[2].nom} - ${inventaire[2].prix} 🌒
Tu as ${bourse_aventurier} 🌒 dans ta bourse.
Quelle potion souhaites-tu acheter ? (saisis le chiffre associé à la potion 🧪)`))

if (potion_souhaitee > inventaire.length){
  console.log("Nous n'avons pas ce produit en stock, désolé !")
}
else{
  let quantite_souhaitee = Number(prompt(`Vous souhaitez acheter une ${inventaire[potion_souhaitee-1].nom}. Combien en veux-tu ?`))

  if (inventaire[potion_souhaitee-1].stock < quantite_souhaitee){
    console.log("Nous n'avons pas assez de produits en stock, sorry !")
  }
  else {
    let prix_total = inventaire[potion_souhaitee-1].prix * quantite_souhaitee; 
    if( prix_total > bourse_aventurier){
      console.log("Tu n'as pas assez d'argent, sorry !")
    }
    else{
      bourse_aventurier = bourse_aventurier - prix_total
      console.log("C'est noté ! voici ton ticket de caisse :")
      console.log(`Produit : ${inventaire[potion_souhaitee-1].nom} 
Prix unitaire : ${inventaire[potion_souhaitee-1].prix}
Qté : ${quantite_souhaitee}
Prix total : ${prix_total}
Il vous reste ${bourse_aventurier} 🌒 dans votre bourse. `)
    }
  }
}



