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
    console.log("edit html element : ", modifier)
    modifier.innerHTML = modifier.innerHTML + `
    <form >
        <input  value="" id="inputBis"  type="text" placeholder="A faire..."><br>
        <select id ="Selection" class="mt-2" id="">
            <option value="To do">To do</option>
            <option value="Doing">En cours</option>
            <option value="Done">A faire</option>
        </select>
        <button onClick="valider(${i})" >valider</button>
    </form>`
        
    
}

function valider(i){
    console.log("valider input value : ", document.getElementById("inputBis").value)
    console.log("valider selecte value : ", document.getElementById("Selection").value)

    tasks[i].value = document.getElementById("inputBis").value
    tasks[i].status = document.getElementById("Selection").value
    
    displayList()
    
    }



function random(){


}



