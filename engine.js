const text = document.querySelector(".password");

// ~`!@#$%^&*()_-+={[}]|:;"<,>.?/

let char =
  '~`!@#$%^&*()_-+={[}]|:;"<,>.?/ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// 92
let password = "";
const max = 92;
const min = 0;

function generatepass() {
  for (let i = 0; i <= 8; i++) {
    password += char[Math.floor(Math.random() * (max - min)) + min];
  }
  text.value = `${password}`;
  //   console.log(password);
  password = "";
}

document.querySelector(".btn").addEventListener("click", generatepass);
