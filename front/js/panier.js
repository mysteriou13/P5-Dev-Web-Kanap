class panier{

    add_element(key,value){

        if(localStorage.getItem(key) === null){

            alert("add");
            localStorage.setItem(key, value);

        }

    }


    cart_panier(data,id){
      
      var cardpanier = `
                <div class="cart__item__img">
                  <img src="${data[1]}" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${data[0]}</h2>
                    <p>${data[2]}</p>
                    <p>42,00 €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${data[3]}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem" id = `+id+`#${data[2]}>Supprimer</p>
                    </div>
                  </div>
                </div>`;
                

                return cardpanier;
     
    }

        show_panier(){

            console.log(localStorage);  

            var tabitem = [];

            var tabitem1 = [];

            for (var i = 0; i < localStorage.length; i++) {

                // set iteration key name
                var key = localStorage.key(i);
              
                // use key name to retrieve the corresponding value
                var value = localStorage.getItem(key);

                 tabitem.push(value);
              
                // console.log the iteration key and value
            
                //console.log(value);

              }
   
              var tabid = [];

              for(var t = 0; t <tabitem.length; t++){

                 //console.log(tabitem[t]);

                 var tab = tabitem[t].split(' ');

                    //console.log(tab[1]);

                    tabitem1.push(tab[1]);

                    tabid.push(tab[0]);

              }

              var tabz = [];

              for(var z = 0; z < tabid.length; z++){

                tabid[z].replace("&Kanap", "");

                tabz.push(tabid[z].replace("&Kanap", ""));
                
              }

      


              var tabd = [];
              
              for(var t1 = 0; t1 < tabitem1.length; t1++){

                //console.log(tabitem1[t1]);

                var d = tabitem1[t1].split("&");

               tabd.push(d);

              }

         

              for(var b = 0; b < tabd.length; b++){

                var titem = this.cart_panier(tabd[b],tabz[b]);

                document.getElementById("cart__items").innerHTML = document.getElementById("cart__items").innerHTML+titem;

              }

              
        }
    

}