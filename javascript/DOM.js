//accessing the section using id name
const view1=document.getElementById("view1");
console.log(view1);
//accessing without id name
const view2 = document.querySelector("#view2");
console.log(view2)

view1.style.display="flex";
view2.style.display="none";
const views=document.getElementsByClassName("view");
const evendivs=view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evendivs)
evendivs[4].style.backgroundColor="purple";

// change style for even index
for(i=0;i<evendivs.length;i++){
    evendivs[i].style.backgroundColor="green";
    evendivs[i].style.width="150px";
}
//chnage the name of the title for the page
const navtext=document.querySelector("nav h1");
console.log(navtext)
navtext.textContent="Hello world";
//overide the nav content using inner html
const navbar=document.querySelector("nav");
navbar.innerHTML='<h1> pooja </h1> <p>subscribe to pooja viwers </p>'
console.log(navbar);
navbar.style.justifyContent="flex-start"
navbar.style.justifyContent="flex-end"
navbar.style.justifyContent="space-evenly" // correct space 
// simple code for navigation
console.log(evendivs[0]);
console.log(evendivs[0].parentElement);

view1.style.display="none";
// add styles for page2 
view2.style.display="none";
view2.style.display="flex";
view2.style.flexDirection="row";
view2.style.flexWrap="wrap";
view2.style.margin="10px"; 

console.log(view2.lastElementChild);
//view2.lastElementChild.remove(); //mupage title will remove

// add an element in js
while(view2.lastChild){
    view2.lastChild.remove();
}
const newdiv=document.createElement("div");
newdiv.textContent="Hi";
//styling
newdiv.style.width="100px";
newdiv.style.height="100px";
newdiv.style.backgroundColor="yellow";
newdiv.style.color="black";
newdiv.style.display="flex";
newdiv.style.justifyContent="center";
newdiv.style.alignItems="center";
view2.append(newdiv);

const creatdiv=(parent,iter)=>{
    const newdiv=document.createElement("div");
newdiv.textContent=iter;
//styling
newdiv.style.width="100px";
newdiv.style.height="100px";
newdiv.style.margin="10px"
newdiv.style.backgroundColor="yellow";
newdiv.style.color="black";
newdiv.style.display="flex";
newdiv.style.justifyContent="center";
newdiv.style.alignItems="center";
parent.append(newdiv);
}
for(let i=0;i<12;i++){
    creatdiv(view2,i );
}
   

