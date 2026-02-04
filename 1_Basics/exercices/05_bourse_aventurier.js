// Bourse de l'Aventurier 💰

// Variables des exercices précédents (modifie selon tes valeurs)
let stock_potion_soin = 10;
let prix_potion_soin = 50;
let portefeuille_aventurier = 550;
while (portefeuille_aventurier > 0 && stock_potion_soin > 0){


    let qté = Number(prompt("Merci de saisir le nombre de potion de soins voulu."));
    let total = prix_potion_soin * qté;

    if (stock_potion_soin >= qté){
        if (portefeuille_aventurier >= total){
            portefeuille_aventurier = portefeuille_aventurier - total
            stock_potion_soin = stock_potion_soin - qté
            console.log(`Transaction validée, il te reste ${portefeuille_aventurier} 🌒 et il nous reste ${stock_potion_soin} potions en stock.`)
        
        }
        else{
            console.log(`Tu n'as pas assez de 🌒.`)
        }
    }
    else {
        console.log(`Nous n'avons pas assez de potions en stock, sorry.`)
    }

}
