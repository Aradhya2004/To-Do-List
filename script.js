const input_txt = document.getElementById("input");
const list_container = document.getElementById("list-container");

function addText(){
    if(input_txt.value == ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_txt.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#10539;";
        
        li.appendChild(span)
    }
    input_txt.value = "";
    saveData();
}
list_container.addEventListener("click",function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        console.log("kkk");
        e.target.parentElement.style.display = 'none';
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",list_container.innerHTML);
}
function showTask(){
    list_container.innerHTML = localStorage.getItem("data");
}
showTask()