const expandBtn = document.getElementById("banklist");
const list = document.getElementById("list");

expandBtn.addEventListener("click", function() {
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
});
