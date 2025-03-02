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
document.getElementById("theme-btn").addEventListener("click", function () {
  const themes = [
    "#aaa69d",
    "#f5cd79",
    "#fa3c83",
    "#BDC581",
    "#CAD3C8",
    "#F8EFBA",
    "#ff6b6b",
    "#48dbfb",
    "#1dd1a1",
    "#feca57",
    "#5f27cd",
    "#ff9ff3",
    "#00d2d3",
    "#c8d6e5",
    "#576574",
    "#ff9f43",
    "#ee5253",
    "#0abde3",
    "#10ac84",
    "#ff6b81",
    "#a29bfe",
    "#fd79a8",
    "#ffeaa7",
    "#00cec9",
    "#fab1a0",
    "#dfe6e9",
    "#636e72",
    "#b2bec3",
    "#e84393",
    "#fdcb6e",
    "#2d3436",
    "#55efc4",
    "#74b9ff",
    "#e17055",
    "#00b894",
    "#0984e3",
  ];
  document.body.style.backgroundColor =
    themes[Math.floor(Math.random() * themes.length)];
});
