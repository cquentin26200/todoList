const inputText = document.querySelector(".firstInput");
const secondInput = document.querySelector(".secondInput");
const idea = document.querySelector(".idea");
const basicSentence = document.querySelector(".basicSentence");

const delSelected = document.querySelector(".delSelected");
const deleteSelected = document.querySelector(".deleteSelected");
const selectAll = document.querySelector(".selectAll");
const onlySelect = document.querySelector(".onlySelect");
const onlyNotSelect = document.querySelector(".onlyNotSelect");

function addNewTodo() {
  if (inputText.value !== "" && secondInput.value !== "") {
    let name =
      inputText.value.charAt(0).toUpperCase() + inputText.value.slice(1);
    if (!isNaN(secondInput.value) && isNaN(inputText.value)) {
      idea.insertAdjacentHTML(
        "beforeend",
        `<div class="border justify-content-between m-4 px-4 d-flex align-items-center">
        <p class="m-0 text-start">Name: ${
          secondInput.value > 1 ? name + "s" : name
        }</p>
        <div class="d-flex align-items-center">
        <p class ="m-0 me-4 p-3 border border-top-0 border-bottom-0">${
          secondInput.value
        }</p>
        <input class="form-check-input select mt-0 me-4" type="checkbox">
        <img src="../img/trash.svg" class="cursor-pointer trashCan" alt="trash can" />
        </div>`
      );
      basicSentence.remove();
    }
  }

  const selected = document.querySelectorAll(".select");
  const btnSelect = document.querySelectorAll(".btnSelect");

  selected.forEach((element) => {
    element.addEventListener("click", () => {
      btnSelect.forEach((element) => {
        element.checked = false;
      });
    });
  });

  const trashCan = document.querySelectorAll(".trashCan");

  trashCan.forEach((element) => {
    element.addEventListener("click", () => {
      element.parentElement.parentElement.remove();
    });
  });

  inputText.value = "";
  secondInput.value = "";
  delSelected.checked = false;
  deleteSelected.checked = false;
  selectAll.checked = false;
  onlySelect.checked = false;
  onlyNotSelect.checked = false;
}

const inputSubmit = document.querySelector(".btn-outline-secondary");

inputSubmit.addEventListener("click", addNewTodo);

const activeUnit = document.querySelector(".activeUnit");
const unit = document.querySelector(".unit");

activeUnit.addEventListener("click", () => {
  if (!unit.classList.contains("d-block")) {
    unit.classList.add("d-block");
    unit.style.top = "2.4rem";
  } else {
    unit.classList.remove("d-block");
  }
});

function selectAllElement() {
  const selected = document.querySelectorAll(".select");
  selected.forEach((element) => {
    if (selectAll.checked == true) {
      element.checked = true;
    } else {
      element.checked = false;
    }
  });
}

selectAll.addEventListener("click", selectAllElement);

function deleteAllSelected() {
  const selected = document.querySelectorAll(".select");
  selected.forEach((element) => {
    element.checked = false;
  });
}

delSelected.addEventListener("click", deleteAllSelected);

function deleteAllElement() {
  const selected = document.querySelectorAll(".select");
  selected.forEach((element) => {
    if (element.checked == true) {
      element.parentElement.parentElement.remove();
    }
  });
}

deleteSelected.addEventListener("click", deleteAllElement);

function hideTheNotSelect() {
  const selected = document.querySelectorAll(".select");
  selected.forEach((element) => {
    if (
      !element.parentElement.parentElement.classList.contains("d-none") &&
      element.checked === false
    ) {
      element.parentElement.parentElement.classList.add("d-none");
    } else {
      element.parentElement.parentElement.classList.remove("d-none");
    }
  });
}

onlySelect.addEventListener("click", hideTheNotSelect);

function hideTheSelect() {
  const selected = document.querySelectorAll(".select");
  selected.forEach((element) => {
    if (
      !element.parentElement.parentElement.classList.contains("d-none") &&
      element.checked === true
    ) {
      element.parentElement.parentElement.classList.add("d-none");
    } else {
      element.parentElement.parentElement.classList.remove("d-none");
    }
  });
}

onlyNotSelect.addEventListener("click", hideTheSelect);
