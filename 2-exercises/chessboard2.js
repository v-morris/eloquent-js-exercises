let line1 = "", line2 = "", width = 8, height = 8;

for (let i = 0; i < height/2; i++) { //height loop divided by 2 because 2 separate lines being logged
    for (let j = 0; j < width; j++) { //width loop, check length of line
        if (j % 2 === 0 && line1.length < 8) { //if counter location is divisable by 2 and line length < 8 characters
            line1 = line1 + " "; //line that starts with a space
            line2 = line2 + "#"; //line that starts with #
        } else if (j % 2 !== 0 && line1.length < 8){  //if there is a remainder when dividing by 2 & less than 8 characters
            line1 = line1 + "#"; // line starts with #
            line2 = line2 + " "; //line starts with space
        }
    }
console.log(line1); // console log each line by height/2 
console.log(line2);
}
