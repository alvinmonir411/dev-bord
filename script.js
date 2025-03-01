let CompleteBtn = document.querySelectorAll(".Complete-btn");
CompleteBtn.forEach((button) => {
  button.addEventListener("click", function (event) {
    alert("Board Updated Succesfully");
    let currentTime = new Date().toLocaleTimeString();
    let checkboxNumber = valueById("checkbox-Number");
    let CompletedTaskbtn = valueById("Completed-Task-btn");

    document.getElementById("checkbox-Number").innerText = checkboxNumber + 1;
    document.getElementById("Completed-Task-btn").innerText =
      CompletedTaskbtn - 1;
    // ✅ Disable the button

    event.target.classList.add("opacity-50", "cursor-not-allowed");
    // for task completed add on history
    let taskContainer = event.target.parentElement.parentElement;
    let taskid = taskContainer.querySelector("h2").id;
    let tasktext = taskContainer.querySelector("h2").innerText;
    let p = document.createElement("p");
    p.innerText = `you have compeleted task: ${tasktext} on ${currentTime}`;
    document.getElementById("history").appendChild(p);
    // ✅ Check if all tasks are completed
    let remainingTasks = parseInt(
      document.getElementById("Completed-Task-btn").innerText
    );
    if (remainingTasks === 0) {
      alert("You have successfully done all tasks!");
    }
  });
});
document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});
// for cuurent date show
document.getElementById("current-date").innerText =
  new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
// for clear history
document.getElementById("Clear-History").addEventListener("click", function () {
  document.getElementById("history").style.display = "none";
});
