let icon = document.querySelector(".links");
let links = document.querySelector(".PageLinks");

// icon.onclick = function () {
//   if (links.style.display === "block") {
//     links.style.display = "";
//   } else {
//     links.style.display = "block";
//   }
// };

icon.onclick = function () {
  if (links) {
    links.style.display == "block"
      ? (links.style.display = "")
      : (links.style.display = "block");
  }
};
