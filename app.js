var textInput = document.querySelector(".txt-input");
var button = document.querySelector(".btn-translate");
var outputDiv = document.querySelector(".output");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function generateTranslation(text){
    return serverURL + "?" + "text=" + text;
}

function clickHandler(){
   var inputText = textInput.value;
   fetch(generateTranslation(inputText))
   .then(response => response.json())
   .then(json =>{ var translatedText = json.contents.translated
                outputDiv.innerText = translatedText })
}

button.addEventListener("click",clickHandler);