
var pro = new data_produit();

var params = new URLSearchParams(document.location.search);

var pan = new panier();

var reg = new regex();

var url = window.location.href;

let position = url.search("cart.html");

let confirmation = url.search("confirmation.html");

var button = document.getElementById("order");


  if(position !== -1){

    pan.show_panier();

     pan.event_panier();

     pro.data_price();

    button.addEventListener("mouseenter", function( event ) {

      pan.button_commander();
   
     })

     

  }

   if(confirmation !== -1){

    let params = new URLSearchParams(document.location.search);

    let name = params.get("orderId");

    document.getElementById("orderId").innerHTML = name;

    } 
    

    

  function delete_el(id){

    localStorage.removeItem(id);

    window.location.href = "./cart.html";

  }




function button_panier() {

  var id  = params.get("id")+"#"+pro.select_color();

  var data = id+"§"+pro.get_title()+"§"+pro.get_image_url()+"§"+pro.select_color()+"§"+document.getElementById("quantity").value;


pan.add_element(id,data);

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


  
if(params.get("page") == null){

  pro.affiche_all(dataBase);
  
}

if(params.get("page") == "produit"){


  pro.product(dataBase,params.get("id"));


  

}
}



})

// Si promesse 1 et 2 non résolue => traitement de l'erreur si pas de réponse de l'url
.catch((err) => {
 
  

});





