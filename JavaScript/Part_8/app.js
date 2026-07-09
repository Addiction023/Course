let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((min, el) => {
    if (el < min) {
        return el;
    } else {
        return min;
    }
}, arr[0]);
console.log(sum); // Output: 1


const avg = (...arr) => {
    let sum = arr.map((ele) => ele * ele).reduce((res, ele) => (res + ele));
    return sum / arr.length;
};

console.log(avg(1, 2, 3, 4, 5));


const avga = (...arr) => {
    return sum = arr.map((ele) => ele + 5);
};

console.log(avga(1, 2, 3, 4, 5));


const UperCase = (...arr) => arr.map((ele) => ele.toUpperCase());

console.log(UperCase("atul", "durga", "chandra")); 