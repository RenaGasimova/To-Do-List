const input = document.getElementById('input');
const listcontainer = document.getElementById('list-container');
const taskcount = document.querySelector('.task-count'); 

let countvalue = 0;

const displayCount = (countvalue) => {
  taskcount.innerText = countvalue;
};

function addTask() {
  if (input.value === '') {
    alert("No data entered!");
  } else {
    let li = document.createElement('li');
    li.innerHTML = input.value;
    listcontainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span); 
    countvalue += 1;
    displayCount(countvalue);
  }
  input.value = "";
  saveinfo();
}

function KeyPress(event) {
    if (event.keyCode === 13) { 
      event.preventDefault();
      addTask();
    }
  }
  
  input.addEventListener('keypress', KeyPress);
  

listcontainer.addEventListener('click', function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    if (e.target.classList.contains("checked")) {
      countvalue -= 1;
    } else {
      countvalue += 1;
    }
    displayCount(countvalue);
    saveinfo();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    countvalue -= 1;
    displayCount(countvalue); 
    saveinfo();
  }
}, false);

function saveinfo() {
  localStorage.setItem('data', listcontainer.innerHTML);
}

function showInfo() {
  listcontainer.innerHTML = localStorage.getItem("data");
  countvalue = document.querySelectorAll("#list-container li").length;
  displayCount(countvalue);
}

showInfo();
