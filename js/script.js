const inputText = document.querySelector(".firstInput");
const secondInput = document.querySelector(".secondInput");
const inputSubmit = document.querySelector(".btn-outline-secondary");
const idea = document.querySelector(".idea");
const basicSentence = document.querySelector(".basicSentence");

function addNewTodo() {
  if (inputText.value !== "" && secondInput.value !== "") {
    if (isNaN(secondInput.value)) {
      idea.insertAdjacentHTML(
        "beforeend",
        `<div class="border justify-content-between m-4 px-4 py-2 d-flex align-items-center">
        <p class="m-0 text-start">Name: ${inputText.value} Number: ${secondInput.value}</p>
        <div class="d-flex align-items-center">
        <input class="form-check-input select mt-0 me-4" type="checkbox">
        <img src="../img/trash.svg" class="cursor-pointer trashCan" alt="trash can" />
        </div>`
      );
      basicSentence.remove();
    }
  }

  const trashCan = document.querySelectorAll(".trashCan");

  trashCan.forEach((element) => {
    element.addEventListener("click", () => {
      element.parentElement.parentElement.remove();
    });
  });

  const selected = document.querySelectorAll(".select");

  selected.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.classList.contains("selected")) {
        element.classList.remove("selected");
      } else {
        element.classList.add("selected");
      }
    });
  });

  const selectAll = document.querySelector(".selectAll");

  selectAll.addEventListener("click", () => {
    selected.forEach((element) => {
      if (selectAll.checked == true) {
        element.checked = true;
      } else {
        element.checked = false;
      }
    });
  });

  const delSelected = document.querySelector(".delSelected");

  delSelected.addEventListener("click", () => {});
  inputText.value = "";
  secondInput.value = "";
}

inputSubmit.addEventListener("click", addNewTodo);

const filter = document.querySelectorAll("ul li");

filter.forEach((element) => {
  element.style.display = "flex";
  element.style.alignItems = "center";
  element.children[0].style.marginLeft = "5px";
});
