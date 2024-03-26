const button = document.querySelector(".circle");
const display = document.querySelector("p");
let num = document.querySelector("span");

// async function foo() {
//   const response = await fetch("https://api.adviceslip.com/advice");
//   let data = await response.json();
//   console.log(data.slip.id);
//   let text = data.slip["advice"];
//   return text;
// }
// foo();

// button.addEventListener("click", () => {
//   foo();
//   display.textContent = ;
// });

button.addEventListener("click", () => {
  async function foo() {
    const response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    let id = data.slip["id"];
    num.textContent = id;
    let text = data.slip["advice"];
    display.textContent = text;
  }
  foo();
});
