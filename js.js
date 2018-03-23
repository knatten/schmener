var currentWord = null;
var state = 'init';
var seen = []

function init() {
    var content = document.getElementById("content");
    content.onclick = update;
    update()
}

function update(event) {
    if (state == 'question') {
        showAnswer();
    }
    else
    {
        nextWord();
    }
}

function showAnswer() {
    setExplanation(words[currentWord]);
    state = 'answer';
}

function nextWord() {
    var keys = Object.keys(words);
    if (keys.length == seen.length) {
        seen = []
    }
    unseenKeys = keys.filter( function( el ) {
      return seen.indexOf( el ) < 0;
    } );
    currentWord = unseenKeys[Math.floor(Math.random() * unseenKeys.length)];
    setWord(currentWord);
    setExplanation("");
    state = 'question';
}

function setWord(word) {
    document.getElementById("word").innerHTML = word;
    seen.push(word)
}

function setExplanation(explanation) {
    document.getElementById("explanation").innerHTML = explanation;
}

window.onload = init

var words = {
'Schmener?' : 'Skjønner du hva jeg mener?',
'Æreærabor?' : 'Er det her hun bor?',
'Skaruenna?' : 'Hvor skal du hen da?',
'Skrutell?' : 'Skal du ut eller?',
'Fåttfrænåa?' : 'Hva har du fått for deg nå da?',
'Skjemedea?' : 'Hva skjer med det da?',
'Skrupøya?' : 'Skal du på Øya-festivalen?',
'Sepårettepå' : 'Jeg ser på det etterpå.',
'Nåfrålle' : 'Nå får det holde.',
'Kanknofårre' : 'Jeg kan ikke noe for det',
'Skåppimaridarn' : 'Jeg skal opp i Maridalen',
'Denskaruafårass' : 'Den skal du ha for altså',
'Hakkedepåløkkavøtt' : 'Vi har ikke det på Grünerløkka, vet du',
'Skrafårdea?' : 'Hva skal du ha for det da?',
'Skmedea?' : 'Hva skal du med det da?',
}
