class regex {


  /* constcteur de la class */
  constructor(){
  
    this.iderror = null;
    this.div = null;
    this.diverror = null;
    this.letters = null;
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

    set_letter(){

     return this.letters = /^[a-zA-Zàâäéèêëïîôöùûüç ,.'-]+$/;


    }

  /* fonction qui verfier le format du champs nom est prenom */
  regex_nom(id){

     this.set_iderror(id+"ErrorMsg");

     this.set_div(document.getElementById(id));

    this.set_div_error(document.getElementById(this.iderror));

    if (this.div.value.match(this.set_letter())) {
      this.diverror.innerHTML = " ";
    } else {
      this.diverror.innerHTML = "erreur format du nom" ;
    }
  }

    /* fonction qui verfier le format du champs  email*/

 ValidateEmail(id){

  var iderror = id + "ErrorMsg";

  var div = document.getElementById(id);

  var diverror = document.getElementById(iderror);

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if (div.value.match(mailformat)) {

  diverror.innerHTML = " ";

} else {

  diverror.innerHTML = "format email invalide";

}

}


  /* fonction qui verfier le format du champs adress */

valide_adress(id){

  var iderror = id + "ErrorMsg";

    var div = document.getElementById(id);

    var diverror = document.getElementById(iderror);

    var letters = /^[a-zA-Z0-9 ]*$/;
    
    var reslettres = 0;

    if (div.value.match(letters)) {

     
     diverror.innerHTML = " ";

  }else{

    diverror.innerHTML = "erreur format adress";
  }
 
}

  /* fonction qui verfier le format du champs ville*/

verif_city(id){

  var lettre = /^[A-Za-z -]*$/;

  var iderror = id + "ErrorMsg";

  var div = document.getElementById(id);

  var diverror = document.getElementById(iderror);
    
  if(div.value.match(lettre)){

    diverror.innerHTML = " ";

  }else{

    diverror.innerHTML = "erreur format nom  de ville";

  }


}


}
