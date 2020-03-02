function myFunction() {


   var maxLength = 250;
   var a = document.getElementById("sentence").value;
   
  
   document.getElementById("check").innerHTML = maxlength - a.length;

 }