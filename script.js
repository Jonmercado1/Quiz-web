const quizForm = document.getElementById("quiz-form");
const scoreText = document.getElementById("score");
const colorChange = document.getElementsByClassName("labels");
const correct1 = document.getElementById("cor1");
const correct2 = document.getElementById("cor2");
const correct3 = document.getElementById("cor3");
const tInsta = document.querySelector("#input-tinsta");
quizForm.addEventListener('submit', function(event){
    event.preventDefault();
    let score = 0;

    const anwser1 = document.querySelector('input[name="q1"]:checked').value;
    const anwser2 = document.querySelector('input[name="q2"]:checked').value;
    const anwser3 = document.querySelector('input[name="q3"]:checked').value;

    if(anwser1 === 'cop1') {
        score += 1;
    }

    if(anwser2 === 'cop2') {
        score += 1;
    }

    if(anwser3 === 'cop3') {
        score += 1;
    }

    scoreText.style.display = 'block';
    scoreText.innerText = score + "/3";

    for (var i = 0; i < colorChange.length; i++) {
        colorChange[i].style.color = "red";
    }

    correct1.style.color = "green";
    correct2.style.color = "green";
    correct3.style.color = "green";

    console.log(tInsta.value);
})

