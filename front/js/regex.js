class regex {


  /* constcteur de la class */
  constructor(){
  
    this.iderror = null;
    this.div = null;
    this.diverror = null;

    this.letters = /^[a-zA-Zàâäéèêëïîôöùûüç ,.'-]+$/
    
    this.mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    this.adress = /^[a-zA-Z0-9 ]*$/;

    this.city = /^[A-Za-z -]*$/;

  }

  /* modification value this.iderror */
  
  set_iderror(value){

      this.iderror =  value;

    }

    /* modification variable div*/
    set_div(value){

      this.div = value;

    }

    set_div_error(value){

      this.diverror = value;

    }


    /*message erreur des champs */
    error_message(id){

      this.set_iderror(id+"ErrorMsg");

      this.set_div(document.getElementById(id));
 
     this.set_div_error(document.getElementById(this.iderror));

    }

     
  /* fonction qui verfier le format du champs nom est prenom */
  regex_nom(id){

   this.error_message(id);

    if (this.div.value.match(this.letters)) {
      this.diverror.innerHTML = " ";
    } else {
      this.diverror.innerHTML = "erreur format du nom" ;
    }
  }

    /* fonction qui verfier le format du champs  email*/

 ValidateEmail(id){

  this.error_message(id);

if (this.div.value.match(this.mailformat)) {

  this.diverror.innerHTML = " ";

} else {

  this.diverror.innerHTML = "format email invalide";

}

}


  /* fonction qui verfier le format du champs adress */

valide_adress(id){


    this.error_message(id);


    if (this.div.value.match(this.adress)) {

     
     this.diverror.innerHTML = " ";

  }else{

    this.diverror.innerHTML = "erreur format adress";
  }
 
}

  /* fonction qui verfier le format du champs ville*/

verif_city(id){

    this.error_message(id);

    
  if(this.div.value.match(this.city)){

    this.diverror.innerHTML = " ";

  }else{

    this.diverror.innerHTML = "erreur format nom  de ville";

  }


}


}
