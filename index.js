
var bouton = document.getElementById("bouton")
var todoContainer = document.getElementsByClassName("todoContainer");
 var list = document.getElementById("list")

var tasks = []


function onTaskSubmit(){

    var inputValue = document.getElementById("input").value
    var todo = { value: inputValue, status: "to do" }

    
    tasks.push(todo)

    list.innerHTML = ``

    tasks.forEach(function(todo, index){
        list.innerHTML = list.innerHTML + `
        <div class="toDoList">
        <button class="Check"> check ! </button>
        <h4 class="toDoStatus">${todo.status}</h4>
        <p class="toDoTexte">${todo.value}</p>
        <i class="fas fa-cog"></i>
        <a <i onClick="supprimer()" class="fas fa-ban"></i></a>       
    </div>`
        
    })



}


