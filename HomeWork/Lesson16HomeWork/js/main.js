const form = document.getElementById("form");
const taskInput = document.getElementById("taskInput");
const listTask = document.getElementById("tasksList");

const addTask = () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const textTask = taskInput.value;
    
    const addHTML =
      (innerHTML = `<li class="list-group-item d-flex justify-content-between task-item">
<span class="task-title">${textTask}</span>
<div class="task-item__buttons">
  <button type="button" data-action="done" class="btn-action">
    <img src="./img/tick.svg" alt="Done" width="18" height="18">
  </button>
  <button type="button" data-action="delete" class="btn-action">
    <img src="./img/cross.svg" alt="Done" width="18" height="18">
  </button>
</div>
</li>`);

    listTask.insertAdjacentHTML("beforeend", addHTML);

    taskInput.value = "";
  });
};
addTask();

const deleteTask = () => {
  listTask.addEventListener("click", (event) => {
    if (event.target.dataset.action === "delete") {
      const dellTask = event.target.closest(".list-group-item");
      dellTask.remove();
    }
  });
};
deleteTask();

const complidTask = () => {
  listTask.addEventListener("click", (event) => {
    if (event.target.dataset.action === "done") {
      const doneTask = event.target.closest('.list-group-item')
      const taskText= doneTask.querySelector('.task-title');
      
    const doneTaskResult = taskText.classList.toggle('task-title--done');


    }
   
  });
};
complidTask();