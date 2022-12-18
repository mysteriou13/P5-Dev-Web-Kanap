
fetch('http://localhost:3000/api/products')


.then(response => response.json()) 

// Promesse 2 : Récupération des données de l'API
.then(dataBase => {

  var params = new URLSearchParams(document.location.search);

  if(params.get("page") == null){

  affiche_produit(dataBase);
  
}

if(params.get("page") == "produit"){

  product(dataBase,params.get("id"));

}


})

// Si promesse 1 et 2 non résolue => traitement de l'erreur si pas de réponse de l'url
.catch((err) => {
 
  

});

