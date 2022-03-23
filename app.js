const boxes = document.querySelectorAll(".box");
const box = document.getElementById("box1");
// boxes.forEach(() => {
//   e.addEventListener("click", () =>{
//     e.style = `background-color = "red" `
//   });
// })

function black() {
  boxes.forEach((e) => {
    e.addEventListener("click", () => {
      e.style.backgroundColor = "black";
    });
  });
}
function red() {
  boxes.forEach((e) => {
    e.addEventListener("click", () => {
      e.style.backgroundColor = "red";
    });
  });
}
red()