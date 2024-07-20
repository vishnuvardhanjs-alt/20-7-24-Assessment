function createList(){
  let todoInp = document.getElementById("todo-inp")
  let todoList = document.getElementById("todo-list")

  
  let listDiv = document.createElement("div")
  listDiv.className = "list-div"

  let listItem = document.createElement("input");
  listItem.value = todoInp.value;
  listItem.readOnly = true;

  let removeList = document.createElement("button");
  removeList.textContent = "DELETE";
  removeList.addEventListener("click", ()=>{
    todoList.removeChild(listDiv)
  })

  listDiv.append(listItem);
  listDiv.append(removeList);
  todoList.append(listDiv);
}
