class data_produit{

    constructor(){

        this.title = document.getElementById("title");

        this.price = document.getElementById("price");

        this.description = document.getElementById("description");

        this.item_img = document.getElementById("item__img");

        this.color = document.getElementById("colors");

        
    }


    get_title(){

        return  this.title.innerHTML;
    }

    get_price(){

        return  this.price.innerHTML;
    }

     get_description(){

        return this.description.innerHTML;
    
     }

     get_item_img(){

        return this.item_img.innerHTML;

     }

     get_color(){

        return this.color.innerHTML;

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
}