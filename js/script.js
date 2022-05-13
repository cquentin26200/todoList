const inputText = document.querySelector(".form-control");
const inputSubmit = document.querySelector(".btn-outline-secondary");
const idea = document.querySelector(".idea");
const basicSentence = document.querySelector(".basicSentence");

inputSubmit.addEventListener("click", () => {
  if (inputText.value !== "") {
    idea.insertAdjacentHTML(
      "beforeend",
      `<div class="border m-4 px-4 py-2 d-flex justify-content-between align-items-center">
      <p class="m-0 text-start">${inputText.value}</p><input class="form-check-input mt-0" type="checkbox">
      </div>`
    );
    basicSentence.remove();
  }
});
