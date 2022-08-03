const button = document.querySelector("button");

var toggle = false;

const rainbownize = (toggle) => {
  const body = document.querySelector("body");
  const div = document.querySelectorAll("div");
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  if (toggle) {
    div.forEach((element) => {
      element.style.transition = "background-color 500ms ease-in-out";
      element.style.backgroundColor = color;
    });
    body.style.transition = "background-color 500ms ease-in-out";
    body.style.backgroundColor = color;
  }
};

button.addEventListener("click", async () => {
  toggle ? (toggle = false) : (toggle = true);
});

setInterval(async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: rainbownize,
    args: [toggle],
  });
}, 700);
