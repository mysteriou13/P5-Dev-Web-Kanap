
fetch('http://localhost:3000/api/products')


.then(response => response.json()) 

// Promesse 2 : Récupération des données de l'API
.then(dataBase => {

  var params = new URLSearchParams(document.location.search);

  var pro = new data_produit();

  if(params.get("page") == null){

  pro.affiche_all(dataBase);
  
}

if(params.get("page") == "produit"){

  pro.product(dataBase,params.get("id"));

}


})

// Si promesse 1 et 2 non résolue => traitement de l'erreur si pas de réponse de l'url
.catch((err) => {
 
  

});

