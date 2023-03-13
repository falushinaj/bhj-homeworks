// ЗАДАЧА2

const counterVal = document.getElementById("clicker__counter"),
cookies = document.getElementById("cookie");


cookies.onclick = function countingClick() {
  counterVal.textContent++;
  if (counterVal.textContent % 2 == 0) {
    cookies.width="300";
  } else {
    cookies.width = "200";
  }  
}






















