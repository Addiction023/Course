let sqr = (n) => {
    return(n * n);
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