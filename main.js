let Array = require('./array');

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array;

    // Add an item to the array
    arr.push(3);
    // Question 2.1) The array length is 1, the capacity is 3, the memory address is 1;
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

    console.log(arr);
}

main();