var sha256 = false;
var md5 = false;
var ripemd = false;
var whirlpool = false;
var words;
var timeStart, timeEnd;
var date = new Date();

function setup() {
    words = loadStrings("/text/USAndSpanishWords");
    validChars = loadStrings('text/validPassChar.txt');
    alphabet = loadStrings('text/alphabet.txt');
    all = loadStrings('text/charNumSpecial.txt');
}

function updateSHA256() {
    sha256 = true;
    md5 = false;
    ripemd = false;
    whirlpool = false;
    document.getElementById("hashButton").innerHTML="HASH USING SHA-256!";
}

function updateMD5() {
    sha256 = false;
    md5 = true;
    ripemd = false;
    whirlpool = false;
    document.getElementById("hashButton").innerHTML="HASH USING MD5!";
}

function updateRIPEMD() {
    sha256 = false;
    md5 = false;
    ripemd = true;
    whirlpool = false;
    document.getElementById("hashButton").innerHTML="HASH USING RIPEMD!";
}

function updateWHIRLPOOL() {
    sha256 = false;
    md5 = false;
    ripemd = false;
    whirlpool = true;
    document.getElementById("hashButton").innerHTML="HASH USING WHIRLPOOL!";
}

function hashIt() {
    if(sha256 == false && md5 == false && ripemd == false && whirlpool == false) {
        $('.blink').fadeOut(200);
        $('.blink').fadeIn(200);
        $('.blink').fadeOut(200);
        $('.blink').fadeIn(200);
        setInterval(blinker, 500);
    }
    else if(sha256) {
        var password = document.getElementById("password").value;
        var hashed = new Hashes.SHA256().hex(password);
        document.getElementById("plainPassword").innerHTML = password;
        document.getElementById("hashedPassword").innerHTML = hashed;
        document.getElementById("yourHashedPassword").innerHTML = "HASHED PASSWORD USING SHA-256:";
        
        timeStart = date.getTime();
        
        for(var i=0; i < words.length; i++) {
            if(words[i] == password) {
                timeEnd = date.getTime();
                document.getElementById("attackTime").innerHTML = (timeEnd - timeStart) + " milliseconds";
            }
            for(var j=0; j < 9999; j++) {
                if((words[i] + j) == password) {
                    timeEnd = date.getTime();
                    document.getElementById("attackTime").innerHTML = (timeEnd - timeStart) + " milliseconds";
                }
            }
            for(var l=0; l < 1000; l++) {
                var paddedNum = ('000'+ l).slice(-4);
                if((words[i] + l) == password) {
                    timeEnd = date.getTime();
                    document.getElementById("attackTime").innerHTML = (timeEnd - timeStart) + " milliseconds";
                }

            }
        }
    }
    else if(md5) {
        var password = document.getElementById("password").value;
        var hashed = new Hashes.MD5().hex(password);
        document.getElementById("plainPassword").innerHTML = password;
        document.getElementById("hashedPassword").innerHTML = hashed;
        document.getElementById("yourHashedPassword").innerHTML = "HASHED PASSWORD USING MD5:";
        
        timeStart = date.getTime();
        
        for(var i=0; i < words.length; i++) {
            if(words[i] == password) {
                timeEnd = date.getTime();
                document.getElementById("attackTime").innerHTML = timeStart;
            }
            for(var j=0; j < 9999; j++) {
                if((words[i] + j) == password) {
                    timeEnd = date.getTime();
                    document.getElementById("attackTime").innerHTML = (timeEnd - timeStart) + " milliseconds";
                }
            }
            for(var l=0; l < 1000; l++) {
                var paddedNum = ('000'+ l).slice(-4);
                if((words[i] + l) == password) {
                    timeEnd = date.getTime();
                    document.getElementById("attackTime").innerHTML = (timeEnd - timeStart) + " milliseconds";
                }

            }
        }
    }
    else if(ripemd) {
        var password = document.getElementById("password").value;
        var hashed = new Hashes.RMD160().hex(password);
        document.getElementById("plainPassword").innerHTML = document.getElementById("password").value;
        document.getElementById("hashedPassword").innerHTML = hashed;
        document.getElementById("yourHashedPassword").innerHTML = "HASHED PASSWORD USING RIPEMD-160:";
        
        timeStart = date.getTime();
        
        for(var i=0; i < words.length; i++) {
            if(words[i] == password) {
                timeEnd = date.getTime();
                document.getElementById("attackTime").innerHTML = (timeEnd - timeStart) + " milliseconds";
            }
            for(var j=0; j < 9999; j++) {
                if((words[i] + j) == password) {
                    timeEnd = date.getTime();
                    document.getElementById("attackTime").innerHTML = (timeEnd - timeStart) + " milliseconds";
                }
            }
            for(var l=0; l < 1000; l++) {
                var paddedNum = ('000'+ l).slice(-4);
                if((words[i] + l) == password) {
                    timeEnd = date.getTime();
                    document.getElementById("attackTime").innerHTML = (timeEnd - timeStart) + " milliseconds";
                }

            }
        }
    }
    else if(whirlpool) {
        var password = document.getElementById("password").value;
        var hashed = Whirlpool(password);
        document.getElementById("plainPassword").innerHTML = password;
        document.getElementById("hashedPassword").innerHTML = hashed;
        document.getElementById("yourHashedPassword").innerHTML = "HASHED PASSWORD USING WHIRLPOOL:";
        
        timeStart = date.getTime();
        
        for(var i=0; i < words.length; i++) {
            if(words[i] == password) {
                timeEnd = date.getTime();
                document.getElementById("attackTime").innerHTML = (timeEnd - timeStart) + " milliseconds";
            }
            for(var j=0; j < 9999; j++) {
                if((words[i] + j) == password) {
                    timeEnd = date.getTime();
                    document.getElementById("attackTime").innerHTML = (timeEnd - timeStart) + " milliseconds";
                }
            }
            for(var l=0; l < 1000; l++) {
                var paddedNum = ('000'+ l).slice(-4);
                if((words[i] + l) == password) {
                    timeEnd = date.getTime();
                    document.getElementById("attackTime").innerHTML = (timeEnd - timeStart) + " milliseconds";
                }

            }
        }
    }
}