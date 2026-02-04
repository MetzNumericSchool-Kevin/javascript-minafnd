// Aventurier, regarde tout ce que je vends !

// Variable de l'exercice précédent (modifie selon tes valeurs)
const inventaire = [
    potion_soin = {
        nom : "Potion de soin",
        prix : 10,
        stock : 200
    },
    potion_mana = {
        nom: "Potion de mana",
        prix : 15,
        stock : 100
    },

    potion_endurance = {
        nom : "Potion d'endurance",
        prix : 20,
        stock : 150
    }
];

for (const potion of inventaire){
    console.log(`
        Nom : ${potion.nom}
        Prix : ${potion.prix}
        Stock : ${potion.stock}`)
}

for (const potion of inventaire){
    for (const [key, value] of Object.entries(potion)){
        console.log(`${key} : ${value}`)
    }
    console.log("____________")
}