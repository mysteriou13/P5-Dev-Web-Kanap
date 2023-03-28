

class panier extends regex{

  /* ajout element au panier */
    add_element(key,value){

      console.log(value);

        if(localStorage.getItem(key) === null){

          localStorage.setItem(key, value);

          window.location.href = "./cart.html";



        }else{

        
          this.update_quantity(key,value);

          window.location.href = "./cart.html";

      
        }



    }

     /* modification de la quantité d'un article dans le panier*/

    update_item(key,item){

      var tab = key.split("itemQuantity%");

      var data = localStorage.getItem(tab[1]).split("§");

      var total = data[0]+"§"+data[1]+"§"+data[2]+"§"+data[3]+"§"+item; 


      localStorage.setItem(tab[1],total);
            
    }

    /* modifcation quantiter d'un element  dans le panier*/

    update_quantity(key,value){

    
      if(localStorage.getItem(key) !== null){

       var data = localStorage.getItem(key).split("§");

       var val = value.split("§");

       var quant =  parseInt(data[4]);

       var update = null;

       if(  quant+parseInt(val[4]) <= 99 ){

         var update = quant+parseInt(val[4]);


         }else{
          update = 100;
         }

         var total = data[0]+"§"+data[1]+"§"+data[2]+"§"+data[3]+"§"+update; 

         if(parseInt(val[4]) >=1 || parseInt(val[4]) <=99 ){

         localStorage.setItem(key, total);

         }

      }


    }

    /*la card des du canaper dans la panier*/

    card_panier(data){

      var idcolor = data[0];

        var t = idcolor.split("#");
      
      var cardpanier = `

       <article class="cart__item" >
                <div class="cart__item__img">
                  <img src="${data[2]}" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${data[1]}</h2>
                    <p>${data[3]}</p>
                    <p id = "`+data[0]+`"></p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name = "itemQuantity%${idcolor}" id = "itemQuantity%${idcolor}" min="1" max="100" value="${data[4]}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem" id = "${data[0]}" onclick = "delete_el(this.id)">Supprimer</p>
                    </div>
                  </div>
                </div>
                <article>
                `;
                

                return cardpanier;
     
    }

    /* affichage des element du panier*/
        show_panier(){

      
            var tabitem = [];


            for (var i = 0; i < localStorage.length; i++) {

                // set iteration key name
                var key = localStorage.key(i);
              
                // use key name to retrieve the corresponding value
                var value = localStorage.getItem(key);

                 tabitem.push(value+"§");
              
                // console.log the iteration key and value
            
               
              }

              for(var a = 0; a < tabitem.length; a++){
             


                var t = tabitem[a].split("§");

                document.getElementById("cart__items").innerHTML = document.getElementById("cart__items").innerHTML+this.card_panier(t);


              }

              
        }

        /* generation du numero de commande*/

        number_commande(){

        

          var productId = [];

var tabkey = [];

var key = [];

/*recuperation tout les key du locatstroage */
for (let i = 0; i < localStorage.length; i++) {
 
   tabkey.push(localStorage.key(i));

}

/*recuperation id des produit dans le panier*/
for(var c = 0; c < tabkey.length; c++){

  var e  = tabkey[c].split("#");

  key.push(e[0]);

}   




    var productId = key;

      let order = {
        contact: {
          firstName: document.getElementById("firstName").value,
          lastName: document.getElementById("lastName").value,
          address: document.getElementById("address").value,
          city: document.getElementById("city").value,
          email: document.getElementById("email").value,
        },
        products: productId,
      };


      // Options de la method POST. 

      const options = {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
      };

      // Appel de l'API et Envoie des informations contact & products à l'aide de la méthode POST. 

      fetch('http://localhost:3000/api/products/order', options)
        .then((response) =>  response.json())
        
        .then((dataBase) => {
          
          const orderId = dataBase.orderId;

          //envoie vers la page de de confirmation avec l'orderId en fin de l'URL.

          window.location.href = 'confirmation.html' + '?orderId=' + orderId;

          localStorage.clear();
         
        })
        .catch((error) => {
          alert(error);
        });
        }

        /* fonction  qui envoi le numero de commande */

        button_commander(){
        

          var taberrror = ["firstNameErrorMsg", "lastNameErrorMsg", "addressErrorMsg", "cityErrorMsg", "emailErrorMsg"];

          var error = 0;

         var btn = document.getElementById("order");
          
        for(var e = 0; e < taberrror.length; e++){

          var diverror = document.getElementById(taberrror[e]);

          if(diverror.innerHTML !== " "){

            error = error-1;

          }else{
            error = error+1;
          }
        }

        if(error == 5){

         
        
      
          btn.addEventListener("click",  event => {

            this.number_commande();
      
          })

        }else{

          btn.type = "button";

        }

      }




      /*verfication des  champs du formulaire du panier*/
       event_panier(){


        document.getElementById("firstName").addEventListener("keyup",  event => {

          this.error_input("firstName",reg.get_letter(),"error format prénom");
               
               })

        document.getElementById("lastName").addEventListener("keyup",  event => {

          this.error_input("lastName",this.get_letter(),"error format nom");
               
               })
  
               document.getElementById("address").addEventListener("keyup",  event => {
  
                this.error_input("address",this.get_adress(),"error format adress");
                     
                     })
  
  
  
               document.getElementById("city").addEventListener("keyup",  event => {
  
                this.error_input("city",this.get_city(),"error format nom de ville reg ");
                     
                     })
  
  
                     document.getElementById("email").addEventListener("keyup",  event => {
  
                      this.error_input("email",this.get_mail(),"error format email");
                           
                           })
  

       }
      
    }

        