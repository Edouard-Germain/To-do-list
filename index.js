
var bouton = document.getElementById("bouton")
var todoContainer = document.getElementsByClassName("todoContainer");
 var list = document.getElementById("list")

var tasks = []

function displayList(){
    list.innerHTML = ``

    tasks.forEach(function(todo, i){
        list.innerHTML = list.innerHTML + `
        <div class="toDoList">
        <button class="Check"> check ! </button>
        <h4 class="toDoStatus">${todo.status}</h4>
        <p class="toDoTexte">${todo.value}</p>
        <a onClick="edit(${i})"<i class="fas fa-cog"></i>
        <a  onClick="supprimer(${i})" <i class="fas fa-ban"></i></a>       
    </div>`
        
    })
}

function displayList(){
    list.innerHTML = ``

    tasks.forEach(function(todo, i){
        list.innerHTML = list.innerHTML + `
        <div class="toDoList">
        <button class="Check"> check ! </button>
        <h4 class="toDoStatus">${todo.status}</h4>
        <p class="toDoTexte">${todo.value}</p>
        <a onClick="edit(${i})"<i class="fas fa-cog"></i>
        <a  onClick="supprimer(${i})" <i class="fas fa-ban"></i></a>       
    </div>`
        
    })
}


function onTaskSubmit(){

    var inputValue = document.getElementById("input").value
    var todo = { value: inputValue, status: "to do" }
    tasks.push(todo)
    displayList()
}

function supprimer(i){
    tasks.splice(i, 1)
    displayList()
}

function edit(i){
    
    
    tasks[i].value = document.getElementById("inputBis").value
    displayList()
}

