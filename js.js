var currentWord = null;
var state = 'init';
var seen = []

function init() {
    var content = document.getElementById("content");
    document.onclick = update;
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
'Gjøkksmydevel?' : 'Det gjør ikke så mye det, vel?',
'Sjekkass' : 'Det skjer ikke altså',
'Jøkkedejen' : 'Jeg gjør ikke det igjen',
'Fsisånn' : 'For å si det sånn',
'Skurrukevæme?' : 'Skulle du ikke være med?',
'Hadderulaktæ?' : 'Hadde du lagt deg?',
'Skukkaschmelterem' : 'Skulle ikke ha smelt til dem',
'Flea?' : 'Hvorfor det da?',
'Sknåa?' : 'Hva skal du nå da?',
'Mæsjmatæggaæra?' : 'Hvem er det som har tagget her da?',
'Jakkatsmymenåjørra' : 'Jeg har ikke hatt så mye med han å gjøre',
'Assådesjekke' : 'Altså, det skjer ikke!',
'Sjmaskjeddmedæja' : 'Hva er det som har skjedd med deg da?',
'Æknovarnt' : 'Det er ikke noe varmt',
'Jeltatt' : 'I det hele tatt',
'Menjelveta' : 'Men i helvete, da',
'Fåvæma' : 'Få være med da',
'Mårrujiras' : 'Nå må du gi seg altså',
'Virruano?' : 'Vil du ha noe?',
'Æræræækjsen' : 'Er det her det er action?',
'Jant' : 'Ikke sant',
'Schwærærn?' : 'Hvor stor er den?',
'Døttajæræ?' : 'Dyttet jeg deg?',
'Nærusett' : 'Nei har du sett',
'Skasepåre' : 'Jeg skal se på det',
'Lm' : 'Liksom',
}
