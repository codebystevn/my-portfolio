const yearElem = document.getElementById("year");
if (yearElem) {
  yearElem.textContent = new Date().getFullYear();
}