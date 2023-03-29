var button = document.querySelectorAll("button");

button.addEventListener("click", collapseContents)
function collapseContents() {
    var tableOfContents = querySelectorAll("ol");
    if (tableOfContents.style.display === "none") {
      tableOfContents.style.display = "block";
    } else {
      tableOfContents.style.display = "none";
    }
  }