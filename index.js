function validate(){
var at=document.getElementById("email-label").value.indexOf("@");
var dot=document.getElementById("email-label").value.indexOf(".");
var age=document.getElementById("number-label").value;
var fname=document.getElementById("name").value;
submitOK="true";
if (fname.length>10)
 { 
alert("The name must be less than 10 characters");
 submitOK="false"; 
}
if (isNaN(age)||age<1||age>100)
 { 
alert("The age must be a number between 1 and 100");
 submitOK="false"; 
}
if (at==-1) 
 { 
alert("Not a valid e-mail!");
 submitOK="false"; 
}
if (dot==-1) 
 { 
alert("Not a valid e-mail!");
 submitOK="false"; 
}
if (submitOK=="false") {
 return false;
 }
}
