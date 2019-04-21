/* COUNT CHARACTERS USING ONE PARAMETER AND REGEX */

function countBs(string){
    return "Capital B appears " + string.match(/B/g).length + " times in this string";
}

console.log(countBs("I am looking for how many B's appear in this sentence BBBB"));


/* COUNT CHARACTERS USING REGEX */

function countChar(string, char){
    var re = new RegExp(char, "g");
    return "The letter " + char + " appears " + string.match(re).length + " times in this string."
}

console.log(countChar("This is a string.", "T"));


/* COUNT CHARACTERS WITH FOR LOOP */

let charCounter = 0;
let countChar2 = function (string, char) {
    for (i = 0; i < string.length; i++) {
        if (string[i] === char) {
            charCounter += 1;
        }
    }
    return "The letter " + char + " appears " + charCounter + " times in this string"
}

console.log(countChar2("String String String Butts", 'g'));

