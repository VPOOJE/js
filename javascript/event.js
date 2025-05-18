var btnsubmit=document.querySelector("#btnsubmit");
var btnclear=document.querySelector("#btnclear");

btnsubmit.addEventListener("click",()=>{
       var uname=document.querySelector("#uname").value;
       var address=document.querySelector("#address").value;
       //alert(uname);
    //    var result1=document.querySelector("#result1");
    //    var result2=document.querySelector("#result2");
    //    result1.innerHTML="username:"+uname;
    //    result2.innerHTML="Address:"+address;

       // dynamic creation 
       var body=document.body;
       var rname=document.createElement("h3");
       var radd=document.createElement("h3");
       rname.innerHTML="username:"+uname;
       radd.innerHTML="address:"+address;
       body.append(rname,radd);
});
//clear username and address in the bar
btnclear.addEventListener("click",function(){
  document.querySelector("#uname").value="";
  document.querySelector("#address").value="";
  document.querySelectorAll("h3").forEach((elemnet)=>{
     elemnet.remove()

  });
});
// queryselector - sametime remove or add 1 
// querySelectorall - add multiple remove multiple
