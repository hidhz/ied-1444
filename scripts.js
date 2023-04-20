import chats from "./data.js";

const app = document.getElementById("app");
const box = document.getElementById("box");
const tombol = document.getElementById("tombol");
let ival = 1;

function chatElement() {
  const chatCol = document.getElementById("chat-col");
  let index = 0;
  const inter = setInterval(function () {
    const p = document.createElement("p");
    p.innerText = chats[index];
    chatCol.appendChild(p);
    index++;
    if (index == chats.length) clearInterval(inter);
  }, ival);
}

tombol.addEventListener("click", function () {
  box.classList.add("box");
  tombol.style.display = "none";

  chatElement();
  let index = 0;
  const inter = setInterval(function () {
    for (let i = 0; i <= chats.length; i++) {
      if (index % 2 == 1) {
        app.innerHTML = `<p data-aos="zoom-out">${chats[index]}<p>`;
      } else {
        app.innerHTML = `<p data-aos="zoom-in">${chats[index]}<p>`;
      }
    }
    index++;
    if (index == chats.length) clearInterval(inter);
  }, ival);
});
