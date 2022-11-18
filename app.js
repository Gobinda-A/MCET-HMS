const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
/*Validatin starts here*/

function seterror(id,error){
  let element=document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML=error;

}
function clearError(){
  let errors=document.getElementsByClassName('formerror');
  for(let item of errors){
      item.innerHTML="";
  }
}
/*Login varibales*/

function validateForm(){
  let returnval=true;
  clearError();
  var name=document.forms['myForm']["fname"].value;
  if(name.length<5){
      seterror("name","*Username_too_short");
      returnval=false;
  }
  var email=document.forms['myForm']["femail"].value;
  if(email.length>20){
      seterror("email","*Email_too_Long");
      returnval=false;
  }
  var phone=document.forms['myForm']["fphone"].value;
  if(phone.length!=10){
      seterror("phone","*Should_be_10_digits_only");
      returnval=false;
  }
  var password=document.forms['myForm']["fpass"].value;
  if(password.length<6){
      seterror("pass","*Atleast_6_character");
      returnval=false;
  }
  var cpassword=document.forms['myForm']["fcpass"].value;
  if(password!=cpassword){
      seterror("cpass","*Password_Mismatch!");
      returnval=false;
  }

return returnval;
}








