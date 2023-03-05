const modal = document.getElementById("modal-container");
const btn = document.getElementById("open-modal-button");
const btn2 = document.getElementById("open-modal-button2");
const span = document.getElementsByClassName("close")[0];
const detach = document.getElementsByClassName("detach-button");

function showPopup() {
  const actionImage = document.getElementById("action-button-1");
  const popUp1 = document.getElementById("pop-up-1");
  if (actionImage.src.endsWith("action.svg")) {
    actionImage.setAttribute("src", "./assets/images/action-green.svg");
    popUp1.classList.add("flex");
  } else {
    actionImage.setAttribute("src", "./assets/images/action.svg");
    popUp1.classList.remove("flex");
  }
}

function showPopup2() {
  const actionImage = document.getElementById("action-button-2");
  const popUp1 = document.getElementById("pop-up-2");
  if (actionImage.src.endsWith("action.svg")) {
    actionImage.setAttribute("src", "./assets/images/action-green.svg");
    popUp1.classList.add("flex");
  } else {
    actionImage.setAttribute("src", "./assets/images/action.svg");
    popUp1.classList.remove("flex");
  }
}

btn.onclick = function () {
  modal.style.display = "flex";
};

btn2.onclick = function () {
  modal.style.display = "flex";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
