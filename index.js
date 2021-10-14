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
        <div class="modifier"></div>   
        </div>
        `
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

    var modifier = document.getElementsByClassName("modifier")[i]
    
    modifier.innerHTML = modifier.innerHTML + `
    <form >
    <input  value="" id="inputBis"  type="text" placeholder="A faire..."><br>
    <button onClick="valider()" >valider</button>
    <select class="mt-2" id="">
    <option value="">To do</option>
    <option value="">Doing</option>
    <option value="">Done</option>
    </select>
    </form>`
}

function valider(i){

    tasks[i].value = document.getElementById("inputBis").value
     displayList()

    }

function random(){
    
    var randomTask = ["faire a manger","ranger la chambre"]
    var random = randomTask[Math.floor(Math.random()*randomTask.length)]
    console.log(random)
    var task = {value: random, status: "to do"}
    tasks.push(task)
    displayList()
}



