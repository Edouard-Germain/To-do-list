var ajouter = document.getElementById("ajouter")
var bouton = document.getElementById("bouton")
var todoContainer = document.getElementsByClassName("todoContainer");
 var list = document.getElementById("list")

var task = []


function onTaskSubmit(){

    var todo = {
        status: "",
        text: "coucou",
        priorite: ""
    }

    
    task.push(todo)

debugger

    task.forEach(function(task){
        // var todoList = document.createElement(li[``])
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(`${todo}`));
        list.appendChild(li)
        // list.appendChild(todoList)

 

    })

    console.log(task)
}

