let formz = document.querySelector("form")
let input = document.querySelector("input")
let ul = document.querySelector("ul");
let errorblock = document.querySelector(".errorblock")
let btn1 = document.querySelector("#btn")
formz.addEventListener("submit", e => {
  e.preventDefault();
  let li = document.createElement("li");
  let p = document.createElement("p")
  if (input.value == "") {
    // alert("fill")
    errorblock.textContent = 'Please add item';
    return false;
  }
  else {
    p.innerHTML = `${input.value}`;
    li.appendChild(p)
    ul.appendChild(li);
    errorblock.textContent = null;
  }
  let span = document.createElement("span");
  let button1 = document.createElement("button")
  button1.textContent = "Edit"
  button1.className = "editbtn"
  let button2 = document.createElement("button")
  button2.textContent = "Delete"
  button2.className = "deletebtn"
  span.appendChild(button1)
  span.appendChild(button2)
  li.appendChild(span);
  input.value = ""
  button1.addEventListener("click", () => {
    if (button1.textContent === "Edit") {
      input.value = p.textContent;
      button1.textContent = "update"
    }
    else {
      p.textContent = input.value;
      button1.textContent = "Edit";
      input.value = ""
    }
  })
  button2.addEventListener("click", (e) => {
    li.remove()
  })
});
