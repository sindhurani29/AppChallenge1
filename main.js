function myFunction() {


   var maxLength = 250;
   var a = document.getElementById("sentence").value;
   
  
   document.getElementById("check").innerHTML = maxLength - a.length;

 }