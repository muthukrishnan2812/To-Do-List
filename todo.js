const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputbox.value === ''){
    alert("Pls enter any value");
    }else{
        let li = document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
    }
    inputbox.value="";
    saveData();
   
}
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showData(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showData();