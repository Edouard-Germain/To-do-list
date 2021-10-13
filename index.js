var ajouter = document.getElementById("ajouter")
var bouton = document.getElementById("bouton")
var todoContainer = document.getElementsByClassName("todoContainer");
 var list = document.getElementById("list")

var task = []


function onTaskSubmit(){

    console.log("hello world")
}
    var todo = {
        status: "",
        text: "coucou",
        priorite: ""
    }

    
    task.push(todo)

debugger

    task.forEach(function(task){
        // var todoList = document.createElement(li[``])
        list.innerHTML= `<li> ${task.text} </li>`
        // list.appendChild(todoList)

 

    })

    console.log(task)


