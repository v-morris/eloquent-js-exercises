let solid = "#", space = " ", lineOne = "", lineTwo = "", width1 = 8, height1 = 8, lineCombine;

for (let i = 0; i < height1 / 2; i++) {
    while (lineOne.length < width1) {
        lineOne = lineOne + space + solid;
        if (lineOne.length === width1) {
            while (lineTwo.length < width1) {
                lineTwo = lineTwo + solid + space;
            }
            lineCombine = lineOne + "\n" + lineTwo;
        }
    }
}