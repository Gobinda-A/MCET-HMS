let uname='Gobu1208';
let pass='Gobu123';
var val=true;
function verifyMe(){
    var un=document.forms['loginForm']["uname"].value;
    var pw=document.forms['loginForm']["pass"].value;
    if(un==uname && pw==pass){
    window.location="new.html";val=true;

}
    else
    {alert("Inavlid Username or Password");val=false;}
return val;
  }