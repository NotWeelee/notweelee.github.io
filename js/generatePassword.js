var words;
var validChars;
var alphabet;
var all;

function setup() {
    words = loadStrings('textFiles/commonUSWords.txt');
    validChars = loadStrings('textFiles/validPassChar.txt');
    alphabet = loadStrings('textFiles/alphabet.txt');
    all = loadStrings('textFiles/charNumSpecial.txt');
}

function weakPassword() {
    var result = "";
    result += words[Math.floor(Math.random() * words.length)];
    
    for(var i=0; i < 2; i++) {
        result += Math.floor(Math.random() * 10);
    }
    document.getElementById("password").value = result;
}

function mediumPassword() {
    var result = "";
    for(var i=0; i < 2; i++) {
        result += words[Math.floor(Math.random() * words.length)];
    }
    
    for(var i=0; i < 4; i++) {
        result += Math.floor(Math.random() * 10);
    }
    
    result += validChars[Math.floor(Math.random() * 4)];
    
    document.getElementById("password").value = result;
}

function strongPassword() {
    var result = "";
    
    for(var i=0; i < 20; i++) {
        result += all[Math.floor(Math.random() * all.length)];
    }
    
    document.getElementById("password").value = result;
}