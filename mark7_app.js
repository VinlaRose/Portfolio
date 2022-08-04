var languageselect1 = document.querySelector("#language1");
var languageselect2 = document.querySelector("#language2");
var languageselect3 = document.querySelector("#language3");
var languageselect4 = document.querySelector("#language4");
var languageselect5 = document.querySelector("#language5");


var serverURL = "https://api.funtranslations.com/translate/minion.json"
var serverURL = "https://api.funtranslations.com/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/pirate.json"
var serverURL = "https://api.funtranslations.com/translate/valspeak.json"

var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");
// outputDiv.innerText = "vinla";



// console.log(txtInput)
function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}


function errorHandler(error){
    console.log("error occurred", error);
    alert("something wrong with server: try again after some time")

}
function clickHandler(){
    var inputText = txtInput.value; 

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;

        } 
        )
        .catch(errorHandler)
}; 





btnTranslate.addEventListener("click", clickHandler)