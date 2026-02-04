// Affichage conditionnel avec switch

// Variables des exercices précédents (modifie selon tes valeurs)
const nom_boutique = "La Potion Enchantée";
const nom_sorcier = "Archibald";
let stock_potion_soin = 10;
let prix_potion_soin = 50;

let saisie = prompt(`Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔
    \n1. Le nom de la boutique
    \n2. Le nom du Sorcier
    \n3. Le prix d'un potion de soin
    \n4. La quantité d'une potion de soin`)


let option = Number(saisie)
switch (option) {
    case 1:
        console.log(`Le nom de la boutique est ${nom_boutique}`);
        break;
    case 2:
        console.log(`Le nom du sorcier est ${nom_sorcier}`)
        break;
    case 3:
        console.log(`Le prix d'une potion de soin est de ${prix_potion_soin} roubles.`);
        break;
    case 4:
        console.log(`Il y a ${stock_potion_soin}potions de soin en stock_potion_soin.`)
        break;
    default:
        console.log(`Merci de saisir un chiffre entre 1 et 4.`);
}