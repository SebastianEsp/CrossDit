var selectedLie = ""
var answers = []

function setSelectedLie(event){

    var lie_buttons = document.getElementsByClassName("lie-button")

    for (let index = 0; index < lie_buttons.length; index++) {
        lie_buttons[index].style.display = "none";
    }

    answers = []
    selectedLie = document.getElementById(event.target.classList[0]).innerText
    event.target.parentNode.parentNode.classList.remove("delay-1s")
    event.target.parentNode.parentNode.classList.remove("delay-2s")
    event.target.parentNode.parentNode.classList.add("selectBorder")
    setTimeout(function(){
        event.target.parentNode.parentNode.classList.add("fadeOutRightBig")
    }, 600);
    setTimeout(function(){
        document.getElementById("lies").style.display = "none"
        document.getElementById("answers").style.display = "block"
    }, 1200);

    answers.push(getCorrectAnswer())
    answers.push(selectedLie)   

    var random_lie1 = getRandomLie(prompts[currentPromt + "-lies"])
    var random_lie2 = getRandomLie(prompts[currentPromt + "-lies"])

    answers.push(random_lie1)
    answers.push(random_lie2)

    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

    var duplicates = findDuplicates(answers)

    shuffle(answers)

    document.getElementById("answer-1").innerText = answers[0]
    document.getElementById("answer-2").innerText = answers[1]
    document.getElementById("answer-3").innerText = answers[2]
    document.getElementById("answer-4").innerText = answers[3]
}

function getCorrectAnswer(){
    for (const key in prompts.answers) {
        if (prompts.answers.hasOwnProperty(key)) {
            const element = prompts.answers[key];
            if(Object.keys(element) == currentPromt){
                //answers.push(Object.values(element)[0])
                return Object.values(element)[0]
            }
        }
    }
}

function getSelectedLie(){
    return selectedLie
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function selectTruth(event){

    var truth_buttons = document.getElementsByClassName("truth-button")

    for (let index = 0; index < truth_buttons.length; index++) {
        truth_buttons[index].style.display = "none";
    }

    if(getCorrectAnswer() == document.getElementById(event.target.classList[0]).innerText){
        event.target.parentNode.parentNode.classList.add("selectBorder")
        document.getElementById("true-icon").style.display = "block"
        document.getElementById("true-icon").parentNode.style.zIndex = "5"
    }else{
        event.target.parentNode.parentNode.classList.add("wrongSelectBorder")
        document.getElementById("fake-icon").style.display = "block"
        document.getElementById("fake-icon").parentNode.style.zIndex = "5"
    }
}