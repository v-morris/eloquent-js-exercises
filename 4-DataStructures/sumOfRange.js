// function range(start, end) {
//     let array = [];
//     for (let i = start; i <= end; i++){
//         array.push(i);
//     }
//     return array;
// }

// console.log(range(1,5));


// function sum(num) {
//     let sum = 0;
//     for (let i = 0; i < num.length; i++) {
//         sum = sum + num[i];
//     }
//     return sum;
// }
// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



function range(start, end, step = 1) {
    let array = [];
    if (start < end) {
        if (step < 0) {
            alert('Must input positive step')
        }
        else {
            for (let i = start; i <= end; i += step) {
                array.push(i);
            }
        }
    }
    else {
        if (step > 0) {
            alert('Must input negative step')
        }
        else {
            for (let i = start; i >= end; i += step) {
                array.push(i);
            }
        }
    }
    return array;
}

console.log(range(1, 22, 5));
