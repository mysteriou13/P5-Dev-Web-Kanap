
var pro = new data_produit();

var params = new URLSearchParams(document.location.search);

var pan = new panier();

var reg = new regex();

var url = window.location.href;

let position = url.search("cart.html");

let confirmation = url.search("confirmation.html");

var button = document.getElementById("order");

/* code pour la page panier*/

  if(position !== -1){

    pro.data_price();

    pan.show_panier();

     pan.event_panier();

     var tabi = [];

     for (var i = 0; i < localStorage.length; i++) {

      // set iteration key name
      var key = localStorage.key(i);
  

      var itemkey = "itemQuantity%"+key;
    

      tabi.push(itemkey);
    
    }

    for(a = 0; a < tabi.length; a++){

      var b = document.getElementById(tabi[a]);

      var val = b.value;
      b.onclick  = function() { pan.update_item(this.id,document.getElementById(this.id).value); pro.data_price()};

    }




    button.addEventListener("mouseenter", function( event ) {

      pan.button_commander();
   
     })

     

  }

  /*code la page de confirmation*/

   if(confirmation !== -1){

    let params = new URLSearchParams(document.location.search);

    let name = params.get("orderId");

    document.getElementById("orderId").innerHTML = name;

    } 
    

    
/*fonction qui suprime element dans le panier*/
  function delete_el(id){

    localStorage.removeItem(id);

    window.location.href = "./cart.html";

  }


/* ajout element au panier */

function button_panier() {

  var id  = params.get("id")+"#"+pro.select_color();

  var data = id+"§"+pro.get_title()+"§"+pro.get_image_url()+"§"+pro.select_color()+"§"+document.getElementById("quantity").value;

  console.log(document.getElementById("quantity").value);

  if(document.getElementById("quantity").value >=1 && document.getElementById("quantity").value <=100  ){

pan.add_element(id,data);

  }

}

 
    
/*apelle donner a l'api*/
fetch('http://localhost:3000/api/products')


.then(response => response.json()) 

// Promesse 2 : Récupération des données de l'API
.then(dataBase => {

 /*affiche de tout les produit dans la page d'accueil*/

  if(params.get("page") == null){

  pro.affiche_all(dataBase);
  
}

/* affichage du produit dans la page produit.html */

if(params.get("page") == "produit"){


  pro.product(dataBase,params.get("id"));

}

})

// Si promesse 1 et 2 non résolue => traitement de l'erreur si pas de réponse de l'url
.catch((err) => {
 
  

});





