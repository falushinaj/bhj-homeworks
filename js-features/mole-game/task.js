const hole1 = document.getElementById("hole1");
const hole2 = document.getElementById("hole2");
const hole3 = document.getElementById("hole3");
const hole4 = document.getElementById("hole4");
const hole5 = document.getElementById("hole5");
const hole6 = document.getElementById("hole6");
const hole7 = document.getElementById("hole7");
const hole8 = document.getElementById("hole8");
const hole9 = document.getElementById("hole9");
const holeDead = document.getElementById("dead");
const holeLost = document.getElementById("lost");

hole1.onclick = function viner() {
    check();
    if (hole1.className.includes( 'hole_has-mole' )) {
        holeDead.textContent = Number(holeDead.textContent) + 1;
    } else {
        holeLost.textContent = Number(holeLost.textContent) + 1;
    }; 
}
hole2.onclick = function viner() {
    check();
    if (hole2.className.includes( 'hole_has-mole' )) {
        holeDead.textContent = Number(holeDead.textContent) + 1;
    } else {
        holeLost.textContent = Number(holeLost.textContent) + 1;
    };
}
hole3.onclick = function viner() {
    check();
    if (hole3.className.includes( 'hole_has-mole' )) {
        holeDead.textContent = Number(holeDead.textContent) + 1;
    } else {
        holeLost.textContent = Number(holeLost.textContent) + 1;
    };
}
hole4.onclick = function viner() {
    check();
    if (hole4.className.includes( 'hole_has-mole' )) {
        holeDead.textContent = Number(holeDead.textContent) + 1;
    } else {
        holeLost.textContent = Number(holeLost.textContent) + 1;
    };
}
hole5.onclick = function viner() {
    check();
    if (hole5.className.includes( 'hole_has-mole' )) {
        holeDead.textContent = Number(holeDead.textContent) + 1;
    } else {
        holeLost.textContent = Number(holeLost.textContent) + 1;
    };
}
hole6.onclick = function viner() {
    check();
    if (hole6.className.includes( 'hole_has-mole' )) {
        holeDead.textContent = Number(holeDead.textContent) + 1;
    } else {
        holeLost.textContent = Number(holeLost.textContent) + 1;
    }; 
}
hole7.onclick = function viner() {
    check();
    if (hole7.className.includes( 'hole_has-mole' )) {
        holeDead.textContent = Number(holeDead.textContent) + 1;
    } else {
        holeLost.textContent = Number(holeLost.textContent) + 1;
    };
}
hole8.onclick = function viner() {
    check();
    if (hole8.className.includes( 'hole_has-mole' )) {
        holeDead.textContent = Number(holeDead.textContent) + 1;
    } else {
        holeLost.textContent = Number(holeLost.textContent) + 1;
    };
}
hole9.onclick = function viner() {
    check();
    if (hole9.className.includes( 'hole_has-mole' )) {
        holeDead.textContent = Number(holeDead.textContent) + 1;
    } else {
        holeLost.textContent = Number(holeLost.textContent) + 1;
    }; 
}

function check() {
    if (holeDead.textContent == 10) {
        alert("Вы победили!")
      } if (holeLost.textContent == 5) {
          alert("Вы Проиграли!")
      }
}

