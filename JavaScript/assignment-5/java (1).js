// methodes to write a function in java  
funName();//i can call the function name berfore i wirte the function or above aunder 

function funName(p1,p2){   
    return
}
//funcation Expretion 
// use const to any var does not change 
//prefer to use const 
const fun=function (a,b) {
    return 
};
fun(); //just we can call it under the function

//the most imporatnt type in arraw function(=>) ecma script6

const fun1= (x,y) => x*y; //just one statemnt not have to use {}
const fun2= (x,y) => {// can use {}
    
};

console.log(fun1(10,5));//call the function =50 

//function without names anonymous function
setTimeout (function(){
    console.log('hello')
},2000)// بعد وقت معين ظهر كلمة hello بال console

// اقل  استخدام function
(function(){console.log('hi')})();//print hi
مافي داعي اعمل call 

// higher order function
function fun4(a,b,operation){// like callback function 
 
    return operation(a,b)//call for partmeter (a,b)var+ operation
};
 const result=fun4(3,4, (a,b)=> a+b );//بودي f as prameter 
   console.log(result);//7
 console.log(fun4(3,4, (a,b)=> a*b ));//12
 console.log(fun4(3,4, (a,b)=> a/b ));//0.75
 console.log(fun4(3,4, (a,b)=> a-b ));//-1


//  callback function 
  let arr=[];
  arr.filter((x) => x>10 );
 function fun6(callback){
    const name="fatima";
    array.forEach(elemnt=> {
           callback(elemnt,index,array);
 
    })
 }

fun6((name)=> {
    console.log(name)
})

// argument function 
// do not use this 
function fun7(name1="test"){//add intial value =
     return (name1);
}

// rest parameter (...)= numbers collection of any things
function sum(...numbers){
    numbers.reduce((a,b) => a+b,0);
}
console.log(sum(1,4,5,5,5,2,3));

let arr1=[1,5,6,8];

let arr2=["farima", ...arr1];//زي كانه مسك الارقام وحطهم جوا arr2

//argemnt object function 
function fun9(){//لاحظ ما بياخذ parameters 
    console.log(arguments[0]);//بياخذهم بشكل arguments we add indix[0]print first num
}
fun9(1,2,3,5);//print number 1

let arr3=[]
arr3.forEach((value)=> {//for each loop on the array
    value=10;
})
let arr4=["fatima"]
//x=value
console.log(arr4.map((x,index) =>{
    return {Id:index,name:x};
  }));



let arr7 = [1, 5, 9];

let reversedArray = reverseArray(arr7);

function reverseArray(arr) {
    let newArr = []; 
    for (let i = arr.length - 1; i >= 0; i--) { 
        newArr.push(arr[i]); 
    }
    return newArr; 
}

console.log(reversedArray); 


let arra7 = [1, 5, 9, 6, 3, 87, 72, 23];

function fun(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return true; 
        }
    }
    return false; 
}

console.log(fun(arr7, 9));  
console.log(fun(arr7, 500)); 
let arra8 = [1, 5, 9, 6, 3, 87, 72, 23];
function fun(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) { 
            if (array[i] + array[j] === target) {
                return true; 
            }
        }
    }
    return false; 
}

console.log(fun(arra8, 6));



let arr9 = [1, 5, 7, 3, 90, 10, 50];




