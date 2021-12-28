const navItems = document.querySelectorAll(".nav-bar .tab");
const solutionsTab = document.querySelector(".solution-tab");
const problemSetTab = document.querySelector(".problem-tab");
const emptyTab = document.querySelector(".empty-section");
const problemText = document.querySelector(".problem-text");
const solutionText = document.querySelector(".solution-text");
const textArea = document.querySelector("textarea");
const submitButton = document.querySelector("button");
const outputText = document.querySelector(".output-text");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".close-button");
let text;
let output;

closeButton.addEventListener("click", function () {
  popup.classList.remove("popup-styling");
  popup.classList.add("hide");
  textArea.value = "";
});

textArea.addEventListener("change", function () {
  text = textArea.value;
});
textArea.addEventListener("click", function () {
  textArea.value = "";
  outputText.textContent = "";
});

submitButton.addEventListener("click", function () {
  console.log(text);
  // if (/[^a-z]/i.test(text)) {
  //   console.log("text can only contains letters");
  //   popup.classList.add("popup-styling");
  //   popup.classList.remove("hide");
  //   return;
  // }

  const wordArray = Array.from(text);
  let newArray = [];
  for (let x = 0; x < wordArray.length; x++) {
    let count = 0;
    for (let y = 0; y < wordArray.length; y++) {
      if (wordArray[x].toLowerCase() === wordArray[y].toLowerCase()) {
        count++;
      }
    }
    if (count > 1) {
      newArray.push(")");
    } else {
      newArray.push("(");
    }
  }
  output = newArray.toString().replace(/,/g, "");
  outputText.textContent += output;
});

solutionsTab.addEventListener("click", function () {
  emptyTab.classList.add("border-left");
  problemText.classList.add("hide");
  solutionText.classList.remove("hide");
  solutionsTab.classList.remove("bg-orange");
  problemSetTab.classList.add("bg-orange");
});

problemSetTab.addEventListener("click", function () {
  emptyTab.classList.remove("border-left");
  solutionText.classList.add("hide");
  problemText.classList.remove("hide");
  problemSetTab.classList.remove("bg-orange");
  solutionsTab.classList.add("bg-orange");
});

if (solutionsTab.classList.contains(".active")) {
  problemSetTab.classList.add(".border-bottom");
  // solutionsTab.classList.remove(".hide");
}

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function () {
    var current = document.querySelector(".active");

    if (current) {
      current.classList.remove("active");
    }
    this.classList.add("active");
  });
}
