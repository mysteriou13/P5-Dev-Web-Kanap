function product(dataBase,id){

    var title = document.getElementById("title");

    var price = document.getElementById("price");
    
    var description = document.getElementById("description");

    var image = new Image();

    var item_img = document.getElementById("item__img");

    var color = document.getElementById("colors");

    for (let product of dataBase) {     

        if(id === product._id){

         title.innerHTML = product.name; 

         price.innerHTML = product.price;
         
         description.innerHTML = product.description;
         
         image.src = product.imageUrl;

         image.alt = product.altTxt;

         item_img.appendChild(image);

            for(a = 0; a <= product.colors.length-1; a++){

                var option = document.createElement("option");

                option.value = product.colors[a];

                option.textContent = product.colors[a];
 
                color.appendChild(option);
            }
         

        }
      
      }

    }
