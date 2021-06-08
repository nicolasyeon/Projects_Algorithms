// Push Front
var myArr = [1, 2, 3];
myArr.unshift(0);
console.log(myArr);

// Pop Front
var myArr = [1, 2, 3];
myArr.shift(0);
console.log(myArr);

// Insert At
var myArr = ["Nike", "Adidas", "Reebok"];
var x = "Puma";
myArr[3] = x;
console.log(myArr);

// Remove At
var myArr = ["Jazz", "Clippers", "Suns", "Nuggets"];
var index = myArr.indexOf("Clippers");
if (index > -1) {
    myArr.splice(index, 1);
}
console.log(myArr + " = easy money for the Clippers");

