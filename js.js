var currentWord = null;
var state = 'init';

function update(event) {
    var word = document.getElementById("word")
    var explanation = document.getElementById("explanation")
    if (state == 'question') {
        showAnswer();
    }
    else
    {
        nextWord();
    }
}

function showAnswer() {
    state = 'answer';
    var answer = words[currentWord];
    var explanation = document.getElementById("explanation");
    explanation.innerHTML = words[currentWord];
}

function nextWord() {
    var keys = Object.keys(words);
    currentWord = keys[Math.floor(Math.random() * keys.length)];
    var word = document.getElementById("word");
    word.innerHTML=currentWord;
    var explanation = document.getElementById("explanation");
    explanation.innerHTML = "";
    state = 'question';
}

words = {
'Schmener?' : 'Skjønner du hva jeg mener?',
'Æreærabor?' : 'Er det her hun bor?',
'Skaruenna?' : 'Hvor skal du hen da?',
'Skrutell?' : 'Skal du ut eller?',
'Fåttfrænåa?' : 'Hva har du fått for deg nå da?',
'Skjemedea?' : 'Hva skjer med det da?',
'Skrupøya?' : 'Skal du på Øya-festivalen?',
'Sepårettepå.' : 'Jeg ser på det etterpå.',
'Nåfrålle' : 'Nå får det holde.',
'Kanknofårre' : 'Jeg kan ikke noe for det',
'Skåppimaridarn' : 'Jeg skal opp i Maridalen',
'Denskaruafårass' : 'Den skal du ha for altså',
'Hakkedepåløkkavøtt' : 'Vi har ikke det på Grünerløkka, vet du',
'Skrafårdea?' : 'Hva skal du ha for det da?',
}

function init() {
    var content = document.getElementById("content");
    content.onclick = update;
    update()
}

window.onload = init
