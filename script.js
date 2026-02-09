document.addEventListener("DOMContentLoaded", () => {

  // Existing button log
  const btn = document.getElementById("testBtn");
  btn.addEventListener("click", () => {
    console.log("Button clicked");
  });

  // Todo list setup
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", (e) => {
    e.preventDefault(); // stops any accidental reload

    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
  });

});