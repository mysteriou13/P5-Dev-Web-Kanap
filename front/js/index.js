
var pro = new data_produit();

var params = new URLSearchParams(document.location.search);

var pan = new panier();

var url = window.location.href;

let position = url.search("cart.html");

 
  if(position !== -1){

    pan.show_panier();

  }

function button_panier() {

  var  tab = [];

  var id  = params.get("id")+"#"+pro.select_color();

  var data = params.get("id")+"&"+pro.get_title()+"&"+pro.get_image_url()+"&"+pro.select_color()+"&"+document.getElementById("quantity").value;

tab.push(id,data);

pan.add_element(tab[0],tab[1]);

}



fetch('http://localhost:3000/api/products')


.then(response => response.json()) 

// Promesse 2 : Récupération des données de l'API
.then(dataBase => {


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





