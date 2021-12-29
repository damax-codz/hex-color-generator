function change(){
    var arr =["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    
   var  hexcolor =""
   for(var i=0;i<6;i++){
   var dam = Math.floor(Math.random()*arr.length);
    hexcolor +=arr[dam];
}

   document.getElementById("name").innerHTML = hexcolor;
   document.getElementsByTagName("body")[0].style.background = "#"+hexcolor;
   
}