function factorial(n) {
    let result = 1;   
    for (let i = 1; i <= n; i++) {  
        result *= i;  
    }
    return result;  
}

console.log(factorial(5));  




let arr=[1,2,3];
let result= arr.map((x)=>x*3);
console.log(result);





let arr2= [1, 2, 2, 3, 3, 4, 5];

arr2 = arr2.filter((value, idx, array) => array.indexOf(value) === idx);

console.log(arr2); 




let arr3 = [
    { name: "hussam", age: 30 },
    { name: "Ali", age: 40 },
    { name: "Ahmad", age: 22 }
];

arr3.sort((person1, person2) => person1.age - person2.age);

console.log(arr3);


---------------------------------------------------------------------------

function getMaxValue(array) {
    return array.reduce((max, num) => num > max ? num : max, array[0]);
}
console.log(getMaxValue(arr)); 





let ar = [1, 5, 9, 6, 3, 87, 72, 23];

function reverseArray(array) {
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}
console.log(reverseArray(ar)); 



function findSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return [array[i], array[j]];
            }
        }
    }
    return `There are no two numbers whose sum equals the number 9. `; 
}
let arr4 = [1, 5, 9, 6, 3, 87, 72, 23];
console.log(findSum(arr4, 9));  












