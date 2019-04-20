let num;
for (i = 0; i < 100; i++) {
    num = i + 1;
    if (num % 5 === 0 && num % 3 === 0) { //checks if remainders for division by 5 or 3 is 0
        console.log("FizzBuzz");
    } else if (num % 3 === 0) { //checks remainder for division by 3 is 0
        console.log("Fizz");
    } else if (num % 5 === 0) { //checks remainder for division by 5 is 0
        console.log("Buzz");
    } else {        // no conditions are met, logs number
        console.log(num); 
    }
}