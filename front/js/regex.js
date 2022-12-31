class regex {


  /* fonction qui verfier le format du champs nom est prenom */
  regex_nom(id){

    var iderror = id + "ErrorMsg";

    var div = document.getElementById(id);

    var diverror = document.getElementById(iderror);

    var letters = /^[A-Za-z -]+$/;
    if (div.value.match(letters)) {
      diverror.innerHTML = " ";
    } else {
      diverror.innerHTML = "le champ ne doit contenir que des lettres et des tirets" ;
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
