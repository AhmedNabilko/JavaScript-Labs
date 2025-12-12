
//^ declare elements
let app = document.createElement("div");
let input = document.createElement("div");
let taskInput = document.createElement("input");
let addBtn = document.createElement("button");
let list = document.createElement("div");
let onAdd = function () {

    clickAdd(taskInput.value);
    taskInput.value = "";

}
//& put data for each element (attributes);
// app
app.setAttribute("id", "app");
//      input
input.setAttribute("id", "input");

//              task inputs
taskInput.setAttribute("id", "taskInput");
taskInput.setAttribute("type", "text");
taskInput.setAttribute("placeholder", "Add your task here");

addBtn.setAttribute("id", "add");
addBtn.innerText = "Add";
addBtn.addEventListener("click", onAdd);

//       List
list.setAttribute("id", "list");


let body = document.body;

/*
* Body{   
*        App{    
*                Input  { taskInput, addBtn}
*                list   {         
*                           row{ task   ,   addbtn  ,   deletebtn   },
*                           row{ task   ,   addbtn  ,   deletebtn   },..
*                       }
*
*
*/
body.appendChild(app);

app.appendChild(input);
input.appendChild(taskInput);
input.appendChild(addBtn);
app.appendChild(list);




function clickAdd(input) {
    let validation = /^\s*$/g;
    if (!validation.test(input)) {
        //* declare row 
        let row = document.createElement("div");
        let btns = document.createElement("div");
        let task = document.createElement("span");
        let doneBtn = document.createElement("button");
        let deleteBtn = document.createElement("button");

        let isDone = false;
        let onDone = function () {
            isDone = !isDone;
            clickDone(row, doneBtn, isDone);
        }

        let onDelete = function () {
            clickDelete(row);
        }
        //^ set Data For each element  
        row.setAttribute("class", "row");
        task.setAttribute("class", "task");
        task.innerText = input;
        btns.setAttribute("class", "btns");

        doneBtn.setAttribute("class", "btn");
        doneBtn.innerText = "Done";
        doneBtn.addEventListener("click", onDone);



        deleteBtn.setAttribute("class", "btn");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", onDelete);

        //& Append element to document
        row.appendChild(task);
        row.appendChild(btns);
        btns.appendChild(doneBtn);

        btns.appendChild(deleteBtn);
        list.appendChild(row);
    }
}

function clickDone(row, doneBtn, isDone) {

    if (isDone) {
        row.setAttribute("class", "row completed");
        doneBtn.innerText = "Undo";
    } else {
        row.setAttribute("class", "row");
        doneBtn.innerText = "Done";
    }



}

function clickDelete(row) {
    list.removeChild(row);
    console.log(row);
}





