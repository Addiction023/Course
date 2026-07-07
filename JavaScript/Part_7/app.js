let sqr = (n) => {
    return (n * n);
}
console.log(sqr(5));





let id = setInterval(function () {
    console.log("Hello, World");
}, 2000);

let id2 = setTimeout(function () {
    clearInterval(id);
}, 10000);



id;
id2;

const object = {
    message: "Hello, World!",
    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);


let length = 4;
function callback() {

    console.log(this.length);
}
const object = {
    length: 5,
    method(callback) {

        callback(); // console.log(this.length);

    },
};
object.method(callback, 1, 2);



const arrayAverage = () => ({
    arr: [80, 90, 60],
    getAvg() {
        let sum = 0;
        for (let i = 0; i < this.arr.length; i++) {
            sum += this.arr[i];
        }
        return sum / this.arr.length;
    }
});


const obj = arrayAverage();
console.log(Math.floor(obj.getAvg()));

const isEven = (n) => n % 2 == 0;
console.log(isEven(4));