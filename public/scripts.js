let input_fields = document.querySelectorAll("input");

for (let i = 0; i < input_fields.length; i++) {
  let field = input_fields[i];
  field.addEventListener("input", function (e) {
    if (e.target.value != "") {
      e.target.parentNode.classList.add("has-content");
    } else if (e.target.value == "") {
      e.target.parentNode.classList.remove("has-content");
    }
  });
}

const uparrow = document.querySelector(".up");
const downarrow = document.querySelector(".down");

function Getfocus() {
  uparrow.style.visibility = "visible";
  downarrow.style.visibility = "hidden";
}

function losefocus() {
  downarrow.style.visibility = "visible";
  uparrow.style.visibility = "hidden";
}

window.onscroll = function () {
  let menu = document.querySelector(".fixed-bar");
  let form = document.querySelector("#form");
  let gray = document.querySelector("#gray");
  const bottom_bar = document.querySelector(".fixed-bottom-bar");

  var top = window.pageYOffset || document.documentElement.scrollTop;
  if (top > 300 && top < 1500) {
    menu.style.visibility = "visible";
    bottom_bar.style.visibility = "visible";
  } else if (top < 300) {
    menu.style.visibility = "hidden";
    form.style.display = "none";
    gray.style.visibility = "hidden";
  } else if (top > 1500) {
    bottom_bar.style.visibility = "hidden";
  }
};

function showForm() {
  let form = document.querySelector("#form");
  let gray = document.querySelector("#gray");

  if ((form.style.display = "none")) {
    form.style.display = "block";
    gray.style.visibility = "visible";
  } else if ((form.style.display = "block")) {
    form.style.display = "none";
    gray.style.visibility = "hidden";
  }
}
