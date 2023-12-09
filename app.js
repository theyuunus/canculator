let screen = document.querySelector(`.screen`);
let buttons = document.querySelectorAll(`.btn`);
let clear = document.querySelector(`.btn-clear`);
let equal = document.querySelector(`.btn-equal`);

buttons.forEach(function (button) {
  button.addEventListener(`click`, function (e) {
    let value = e.target.dataset.num;
    screen.value += value;
  });
});

const pls = "Please write...";

equal.addEventListener(`click`, function (e) {
  if (screen.value === ``) {
    screen.value = "Please write...";
  } else {
    let qoshuv = eval(screen.value);
    screen.value = qoshuv;
  }
});

clear.addEventListener(`click`, function (e) {
  screen.value = "";
});
