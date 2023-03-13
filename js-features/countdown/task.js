// ЗАДАЧА1

const timeStart = document.getElementById('timer');

const getTime = function() {
    let timeId = setInterval(function() {
        timeStart.textContent -= 1;
        if (timeStart.textContent == 0) {
            clearInterval(timeId);
            alert("Вы победили в конкурсе");
        }
    }, 1000);  
}

getTime();