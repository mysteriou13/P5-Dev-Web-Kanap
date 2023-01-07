class data_produit{


  /* constructeur de la class */
    constructor(){

        this.title = document.getElementById("title");

        this.price = document.getElementById("price");

        this.description = document.getElementById("description");

        this.item_img = document.getElementById("item__img");

        this.color = document.getElementById("colors");

        this.img_url = null;

        
    }


    /* retourne la variable title*/

    get_title(){

        return  this.title.innerHTML;
    }

    /* retourne la variable price*/

    get_price(){

        return  this.price.innerHTML;
    }

    /*retourne la varaible description*/
     get_description(){

        return this.description.innerHTML;
    
     }

     /*retourne la variable item*/
     get_item_img(){

        return this.item_img.innerHTML;

     }

     /*retourne la variavle color*/
     get_color(){

        return this.color.innerHTML;

     }

     /*retourne la variable img_url*/
     get_image_url(){

        return this.img_url;

     }


    //affiche du produit
 product(dataBase,id){

        
    var image = new Image();
    
    var a = 0;

    for (let product of dataBase) {     

        if(id === product._id){

         this.title.innerHTML = product.name; 

         this.price.innerHTML = product.price;
         
         description.innerHTML = product.description;
         
         image.src = product.imageUrl;

         this.img_url =  product.imageUrl;

         image.alt = product.altTxt;

         this.item_img.appendChild(image);

            for(a == 0; a <= product.colors.length; a++){

                var option = document.createElement("option");

                var name = product.colors[a].replace('/', ' and ');

                option.value = product.colors[a];

                option.textContent = name;

                this.color.appendChild(option);
      
            }
         

        }
      
      }

    }

    /*card des  produit de la d'acceuil */

 card(product){

  
        var card =`
        <a href="./product.html?id=${product._id}&page=produit">
            <article>
                <img src="${product.imageUrl}" alt="${product.altTxt}">
                <h3 class="productName">${product.name}</h3>
                <p class="productDescription">${product.description}</p>
            </article>
        </a>`;    
    
        return card;
    
    }

 
    //afichage des tout les element dans l'index
     affiche_all(dataBase){
    
 
        if(dataBase !== null){
 
     for (let product of dataBase) {  
 
         
 
         // Variable permettant d'identifier la structure de l'élément HTML : #items    
         let structureProducts = document.querySelector('#items'); 
        
         // Ajout des elements HTML à la référence #items
         structureProducts.innerHTML += this.card(product);
       }
 
     }
     
 
 }

    /* affichage du selecteur des couleur dans des canaper*/

 select_color() {
    
    var x = document.getElementById("colors").selectedIndex;
    var y = document.getElementById("colors").options;
    
    var text = y[x].text;
 
    return text;

  }

  /* affiche et calcul des prix dans le panier */

  data_price(){

    var tabitem = [];


    var tabitem = [];


    /* recuper des donner du locatorage */
    for (var i = 0; i < localStorage.length; i++) {


        var key = localStorage.key(i);
      
    
        var value = localStorage.getItem(key);

         tabitem.push(value+"§");
      
   
    
       
      }

      var tabid = [];

       /* speration des element du localstorage */
      for(var a = 0; a < tabitem.length; a++){

        var t = tabitem[a].split("§");

        tabid.push(t[0]);
        
      }

      var tabtotal = [];
      var tabquant = [];
      var tabprice = [];
  


      /* calcul quantité des canaper*/
    for (var i = 0; i < localStorage.length; i++) {

    
        var key = localStorage.key(i);
      
        
        var value = localStorage.getItem(key);

         tabitem.push(value+"§");
      
         var d = tabitem[i].split("§");

          tabid.push(d[0]); 
              
         tabquant.push(parseInt(d[4]));
     
    }

    const initialValue = 0;
    const totalquant = tabquant.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    
  

    fetch('http://localhost:3000/api/products')


    .then(response => response.json()) 
    
    // Promesse 2 : Récupération des données de l'API
    .then(dataBase => {


        for(var f = 0; f < dataBase.length; f++){

    
        for(var f1 = 0; f1 < tabid.length; f1++){

            var id = dataBase[f]._id;
        
            if(tabid[f1].indexOf(id) != -1){
         
        
              tabprice.push(dataBase[f]._id+"µ"+dataBase[f].price);
            
               var splittab = localStorage.getItem(tabid[f1]).split("§");

            
               tabtotal.push(dataBase[f].price*splittab[4]);

            }
        
       }

        }

       


        for(var p = 0; p <tabprice.length; p++){

          var p1 = tabprice[p].split("µ");

          document.getElementById(p1[0]).innerHTML = p1[1]+"€";
         document.getElementById("totalQuantity").innerHTML = totalquant;
        }

        const initialValue1 = 0;
const total = tabtotal.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue1
)

document.getElementById("totalPrice").innerHTML = total;     
        
    
    })
    
    // Si promesse 1 et 2 non résolue => traitement de l'erreur si pas de réponse de l'url
    .catch((err) => {
     
      
    
    });

}

}