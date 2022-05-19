const inputText = document.querySelector(".firstInput");
const secondInput = document.querySelector(".secondInput");
const inputSubmit = document.querySelector(".btn-outline-secondary");
const idea = document.querySelector(".idea");
const basicSentence = document.querySelector(".basicSentence");

function addNewTodo() {
  if (inputText.value !== "" && secondInput.value !== "") {
    if (!isNaN(secondInput.value)) {
      idea.insertAdjacentHTML(
        "beforeend",
        `<div class="border justify-content-between m-4 px-4 d-flex align-items-center">
        <p class="m-0 text-start">Name: ${inputText.value}</p>
        <div class="d-flex align-items-center">
        <p class ="m-0 me-4 p-3 border border-top-0 border-bottom-0">${secondInput.value}</p>
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

  const delSelected = document.querySelector(".delSelected");
  const deleteSelected = document.querySelector(".deleteSelected");
  const selected = document.querySelectorAll(".select");

  selected.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.checked == true) {
        element.classList.add("selected");
      } else {
        element.classList.remove("selected");
      }

      delSelected.checked = false;
      deleteSelected.checked = false;
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

  delSelected.addEventListener("click", () => {
    selected.forEach((element) => {
      element.checked = false;
    });
  });

  deleteSelected.addEventListener("click", () => {
    selected.forEach((element) => {
      if (element.checked == true) {
        element.parentElement.parentElement.remove();
      }
    });
  });

  inputText.value = "";
  secondInput.value = "";
  delSelected.checked = false;
  deleteSelected.checked = false;
}

inputSubmit.addEventListener("click", addNewTodo);

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

const onlySelect = document.querySelector(".onlySelect");

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

const onlyNotSelect = document.querySelector(".onlyNotSelect");

onlyNotSelect.addEventListener("click", hideTheSelect);