let CompleteBtn = document.querySelectorAll(".Complete-btn");
CompleteBtn.forEach((button) => {
  button.addEventListener("click", function (event) {
    let currentTime = new Date().toLocaleTimeString();
    let checkboxNumber = valueById("checkbox-Number");
    let CompletedTaskbtn = valueById("Completed-Task-btn");

    document.getElementById("checkbox-Number").innerText = checkboxNumber + 1;
    document.getElementById("Completed-Task-btn").innerText =
      CompletedTaskbtn - 1;
    event.target.classList.add("opacity-50", "cursor-not-allowed");
    // for task completed add on history
    let taskContainer = event.target.parentElement.parentElement;
    let taskid = taskContainer.querySelector("h2").id;
    let tasktext = taskContainer.querySelector("h2").innerText;

    let p = document.createElement("p");
    p.innerText = `you have compeleted task: ${tasktext} on ${currentTime}`;

    document.getElementById("history").appendChild(p);
    // console.log(tasktext);
  });
});
