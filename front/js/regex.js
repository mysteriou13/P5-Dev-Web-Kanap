class regex {


  /* constcteur de la class */
  constructor(){
  
    this.iderror = null;
    this.div = null;
    this.diverror = null;

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

    get_letter(){

      return this.letters = /^[a-zA-Zàâäéèêëïîôöùûüç ,.'-]+$/;

    }

    get_adress(){

      return this.adress = /^[a-zA-Z0-9 ]*$/;
    }

    get_city(){

      return this.city = /^[A-Za-z -]*$/;
      
    }

    get_mail(){
      
      return this.mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    }

    /*message  input */
    error_input(id,regex,message){

      this.set_iderror(id+"ErrorMsg");

      this.set_div(document.getElementById(id));
 
     this.set_div_error(document.getElementById(this.iderror));

     if (this.div.value.match(regex)) {
      this.diverror.innerHTML = " ";
    } else {
      this.diverror.innerHTML = message ;
    }


    }



}

