
var bouton = document.getElementById("bouton")
var todoContainer = document.getElementsByClassName("todoContainer");
var list = document.getElementById("list")

var tasks = []


function onTaskSubmit(){

    var inputValue = document.getElementById("input").value
    var todo = { value: inputValue, status: "to do" }

    
    tasks.push(todo)

    list.innerHTML = ``

    tasks.forEach(function(todo){
        list.innerHTML = list.innerHTML + `
        <div class="toDoList">
        <button class="Check"> check ! </button>
        <h4 class="toDoStatus">A faire </h4>
        <p class="toDoTexte">${todo.value}</p>
        <i class="fas fa-cog"></i>
        <button onclick="Delete()"> supprimer </button>
    </div>`
        
    })

}

function Delete() {

    tasks.forEach(function())
}
