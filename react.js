const input = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    if (input.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerText = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData()
});

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();