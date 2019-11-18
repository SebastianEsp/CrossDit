var currentPromt = ""
var randomLies = [];

function init() {
    const values = Object.keys(prompts.answers)

    var randomValue = values[parseInt(Math.random() * values.length)]

    switch (randomValue) {
        case "0":
            getLiesFromPrompt(prompts["bolig-lies"])
            document.getElementById("bolig").style.zIndex = 2;
            currentPromt = "bolig"
            break;
        case "1":
            getLiesFromPrompt(prompts["netflix-lies"])
            document.getElementById("netflix").style.zIndex = 2;
            currentPromt = "netflix"
            break;
        case "2":
            getLiesFromPrompt(prompts["metro-lies"])
            document.getElementById("metro").style.zIndex = 2;
            currentPromt = "metro"
            break;
        case "3":
            getLiesFromPrompt(prompts["wolf-lies"])
            document.getElementById("wolf").style.zIndex = 2;
            currentPromt = "wolf"
            break;
        case "4":
            getLiesFromPrompt(prompts["scooters-lies"])
            document.getElementById("scooters").style.zIndex = 2;
            currentPromt = "scooters"
            break;
    }

    document.getElementById("lie-1").innerText = randomLies[0]
    document.getElementById("lie-2").innerText = randomLies[1]
    document.getElementById("lie-3").innerText = randomLies[2]
}

function getCurrentPrompt() {
    return currentPromt
}

function setCurrentPrompt(prompt) {
    currentPromt = prompt
}

function getLiesFromPrompt(prompt) {
    for (var i = 0; i < 3; i++) {
        var entry;

        do {
            entry = getRandomLie(prompt);

        } while (lieExists(entry))

        randomLies.push(entry);
    }
}

function getRandomLie(prompt) {
    return prompt[Math.round(Math.random() * (prompt.length - 1))];
}

function lieExists(entry) {
    return randomLies.indexOf(entry) > -1;
}