let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((min, el) => {
    if(el < min) {
        return el;
    } else {
        return min;
    }
}, arr[0]);
console.log(sum); // Output: 1