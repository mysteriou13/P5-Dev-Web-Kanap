class panier{

    add_element(key,value){

        localStorage.setItem(key, value);
  
console.log(localStorage.getItem(key));

    }

}