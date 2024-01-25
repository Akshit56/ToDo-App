let todoList = [
  {item: 'Milk', dueDate: '25/01/2024'},
  {item: 'Bread', dueDate: '25/01/2024'}
];
displayItems();
function addToDo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');

  let newHtml = '';

  for(let i=0; i<todoList.length; i++){
    newHtml += `
    <div>
     <span>${todoList[i]}</span>
     <button onclick = "todoList.splice(
      ${i},1); displayItems();">Delete</button>
    </div>
    `;
  }
  containerElement.innerHTML = newHtml;
}
