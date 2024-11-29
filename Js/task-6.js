function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxesArea = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");

const destroyBtn = document.querySelector("button[data-destroy]");
destroyBtn.addEventListener("click", () => boxesArea.innerHTML = "")

function createBoxes(amount){
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.height = `${30 + i * 10}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.margin = "5px";
    boxesArea.append(newDiv);
  }
}


createBtn.addEventListener("click", () => {
  const amount = parseInt(document.querySelector('input[type="number"]').value);
  if(amount < 0 || amount > 100){
    alert("0 ila 100 arasında bir sayı giriniz!")
    return
  }
  boxesArea.innerHTML = "";
  createBoxes(amount);
})