function addObjective(){
let obj=document.getElementById('inp1').value;
let priority=document.getElementById('prior').value;

//Conditii//
if(obj.length===0){
  alert("Put your objectives");
}
 else if(priority== 0 ){
  alert("Select priority");
  return;
}
//reset input//
else{
  document.getElementById('inp1').value="";
  document.getElementById('prior').value="";
}

let li=document.createElement("li");//Am creat un element de tip Lista//
let text=document.createTextNode(obj);//Am creat Text ul pentru Li//
li.appendChild(text);//Am adaugat Textul in cadrul elementului Li//
li.classList.add("list-group-item");//Am creat o clasa pentru acest element//

let lista;

switch(parseInt(priority)){  // parseInt//? 
  case 1:
    lista=document.getElementById("low1");
    break;
  case 2:
    lista=document.getElementById("medium2");
    break;
  case 3:
    lista=document.getElementById("high3");
    break;

}
lista.appendChild(li); //plm merge - De verificat cum//
 
//Stergem  elementul   din listaa//

li.addEventListener("click",function(){
  li.remove();
})



}
