var fetchAllTodosUrl = '/api/todos';


document.addEventListener('DOMContentLoaded', function(){
  axios.get(fetchAllTodosUrl)
    .then(parseJSON)
    .then(addTodo)
    .catch(handleErrors);
}, false);

function parseJSON (res){
  console.log(res.data);
  return res.data;
}

function addTodo (todos){
  var todoList = document.getElementById('gridtodo');

  todos.forEach(function(todo){
    console.log(todo.name);

    todoList.appendChild(todoListItemHTML(todo.name,todo.completed));
  });
}

function todoListItemHTML(name,completed){
  var editBtn = document.createElement('i');
  editBtn.setAttribute('class', 'fas fa-edit');
  var deleteBtn = document.createElement('i');
  deleteBtn.setAttribute('class', 'fas fa-trash-alt');
  var li = document.createElement("li");
  li.setAttribute('class', 'todo');

  var alink = document.createElement('a');
  alink.innerHTML = name;

  li.appendChild(alink)
  li.appendChild(editBtn)
  li.appendChild(deleteBtn);

  if(completed){
    li.setAttribute('class', 'todo done');
  }

  return li;
}

function handleErrors(err) {
  if (err.response) {
    console.log("Problem With Response ", err.response.status);
  } else if (err.request) {
    console.log("Problem With Request!");
  } else {
    console.log('Error', err.message);
  }
}
