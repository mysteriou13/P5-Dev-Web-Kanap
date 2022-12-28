class panier{

    add_element(key,value){


        if(localStorage.getItem(key) === null){

          localStorage.setItem(key, value);

        }else{

          this.update_quantity(key,value);
        }

    }

    update_quantity(key,value){

    
      if(localStorage.getItem(key) !== null){

       var data = localStorage.getItem(key).split("§");

       var val = value.split("§");

       var quant =  parseInt(data[4]);

       var update = null;

       if(  quant+parseInt(val[4]) <= 99){

         var update = quant+parseInt(val[4]);

         }else{
          update = 100;
         }

         var total = data[0]+"§"+data[1]+"§"+data[2]+"§"+data[3]+"§"+update; 

         
         localStorage.setItem(key, total);

      }


    }


    card_panier(data){

   

      var idcolor = data[0];

        var t = idcolor.split("#");
      
      var cardpanier = `
                <div class="cart__item__img">
                  <img src="${data[2]}" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${data[1]}</h2>
                    <p>${data[3]}</p>
                    <p id = "`+t[0]+`">42,00 €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${data[4]}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem" id = "${data[0]}" onclick = "delete_el(this.id)">Supprimer</p>
                    </div>
                  </div>
                </div>`;
                

                return cardpanier;
     
    }

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
    

}