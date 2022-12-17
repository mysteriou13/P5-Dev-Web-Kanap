
function affiche_produit(dataBase = null){
    
 
       if(dataBase !== null){

    for (let product of dataBase) {  

        

        // Variable permettant d'identifier la structure de l'élément HTML : #items    
        let structureProducts = document.querySelector('#items'); 
       
        // Ajout des elements HTML à la référence #items
        structureProducts.innerHTML += card(product);
      }

    }
    

}
