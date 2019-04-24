function arrayToList(...args) {
    let rest;
    for (let i = args.length - 1; i >= 0; i--) {
        let value = args[i];
        console.log('value', value);
        console.log('value length', args.length)
        rest = { value: value, rest };
        if (value === args.length){
            console.log('test');
            rest = null;
        }
    }
    return rest;
}

let list = arrayToList(1, 2, 22);
console.log(list);