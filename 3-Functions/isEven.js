//CHECKS IF WHOLE INTEGER IS EVEN OR ODD. IF NEGATIVE INTEGER IS PASSED IN, RUNS FUNCTION AGAIN AS A POSTIVE INTEGER.

function isEven(num) {
    if (num === 0) {
        return true;
    }
    else if (num === 1) {
        return false;
    }
    else {
        return isEven(Math.abs(num - 2));
    }
}

console.log(isEven(33));