 
//  for(let i=1; i<= 3; i++ ){//for row (1,1)
//     for(let j=1 ; j<=3 ; j++){//for col

//         console.log(`(${i},${j})`)//use ذ to get this ``

//     }
//  }

//  let arr=[1,2,3]


//  let arr1= [
//     2,
//     3,
//     {name:'test',
//     age:30,
//  },
//  ["test",
//      {
//         phone:'545464',
//         salary:6844545,
//     },10]

// ];
//  console.log(arr1);
//  console.log(arr1[2].age) //print the age in the object inside the array 
//  console.log(arr1[3][0][3]);
//  //or
//  console.log(arr1[3][0].charAt(arr1[3][0].length-1));
// //sallay/2
// console.log(arr1[3][1].salary/2);
// console.log(arr1[3][2]*10)//print 100



// let arr=[
//     {id:1,value:'exam'},
//     {id:2,value:'test'},
//     {id:3,value:'assginment'},

// ];
// console.log(arr);
// function retern(){
//     let i=0;
//     while(i<arr.length ){
    
//         if(arr[i].name=== "exam"){
//         return arr[i]
    
//         }
//         i++
//     }
// }

//array methodes  dynamic opration 

let arr=[1,2,3,4,5,6,7];
let arr1=[4,5,6];
// console.log(arr)
// arr.push(4)//add element to the last indix of array
// console.log(arr)//[1, 2, 3, 4]
//  arr.unshift(0)//add elemnt in the start of array
//  console.log(arr)//[0, 1, 2, 3, 4]

//  arr.pop();//delet the last elemnt of array
//  console.log(arr);//[0, 1, 2, 3]
//  arr.shift();//delet the first elemnt of the array
//  console.log(arr);//[1, 2, 3]
 
// console.log(arr);
// console.log(arr1);
//  arr.concat(arr1);//does not make the acction on the same arrray 
//  let result= arr.concat(arr1);//هون جمعها وعمل الاكشن عليها 
//  console.log(result);//[1, 2, 3, 4, 5, 6]

// let result= arr.join('-');//convert the array to string and use - between the elemnt 1-2-3
// console.log(result);//1-2-3
// console.log(arr);// [1, 2, 3, 4, 5, 6, 7]
// let result=arr.slice(1,4)//delet first elemnt
// console.log(result);//[2, 3, 4]

// let arr2=[1,2,3,4];
// console.log(arr2)
// arr2.splice(1,2)//edit on the same array without need to use let result=
// //delet or add elemnt to array
// console.log(arr2);//[1, 4]
// arr2.splice(1,2,99)//overloading 
// console.log(arr2)// [1, 99, 4]

//indix of 
// let arr2=[1,2,3,4];
// console.log(arr2)
// console.log(arr2.indexOf(3))//print 2

// let arr3=[1,2,3,'a'];
// console.log(arr3.indexOf('a'));//3

// console.log(arr3.includes(2))//(includes)check if there any elemnt in the array the result just ture or false 
// // print true 
// arr3.reverse()
// console.log(arr3)//['a', 3, 2, 1]

// //sorte in array
// arr3.sort()//ترتيبب من اقل للاكبر في callback funcation 
// //ترتيب بوزن حسب ال value  sort((a,b)=> a-b)
// console.log(arr3)


// let arr4=[1,2,3]
// console.log(arr4)
// // map ترجع ال array بشكل جديد 
// let double=arr4.map(x => x*2 );

// console.log(double);// [2, 4, 6] after the multi*2


//fillter the best methode ever 
//work as for loop 
// let fillter=arr4.filter((x)=> x>1)//if the var x حقق شرط معين 
//رح تطبع اشي جديد محقق للشرط 
// console.log(fillter);//[2, 3]
// حذف رقم 1 لانه ما حقق شرط  x>1

let arr5=[1,2,3]
let reduce=arr5.reduce((pre,curr) => pre+curr )// ارجع مجموع ارقام ال array 
//pre for 1 and curr 2
console.log(reduce);//6 1+2= 3+3= 6

let arr6=[1,2,3]
let reduce1=arr6.reduce((pre,curr) => pre+curr,1 )//add intial value form where he gone to start and add
console.log(reduce1)//the result will be 7 1+1=2+2=4+3=7
//pre =1 and curent =1

//methode like loop 
// اول 
// let indix=0;
let arra7=[1,2,3]
arra7.forEach((x,y)=> {// بترجع ال indix of array 
    console.log(x)
    if(2 === x){
         indix=y
    }
});// reuslt of cosole =1

//find method 
let arr7=[1,2,3]

let found=arr7.find(x=> x>1 )// must have cond to make find works 
console.log(found);//2 بريجع اول elemnt بحقق الشرط

let arr8=[1,2,3]

let found1=arr8.findIndex(x=> x>1 )// must have cond to make find works 
console.log(found1)//1

let arr9=[1,2,3]
//  console.log(arr9.every((x)=> x%2 ===0))// لانه مش كلهم زوجي
//  console.log(arr9);//false

console.log(arr9.some((x)=> x%3 ===0))
 console.log(arr9);//true لانه في رقم قردي باقي القسمة 0

 // and and or &&   || 
 //flat
 let ar1=[1, [2,3],[4,[5]]];
 console.log(ar1.flat(1)); //convert and nested array to final array flat
//[1, 2, 3, 4, Array(1)]
console.log(ar1.flat(2));
//[1, 2, 3, 4, 5]

let ar2=[1,2,3];
// [1,2,2,4,3,6] make the result like this 
let result3=ar2.flatMap(x=>[x,x*2] ); // [1,2 ][2,4][3,6]
//using flat make it flat array 
console.log(result3);//[1, 2, 2, 4, 3, 6]


let ar4=[1,2,3];
ar4.fill(0)//change the value 
console.log(ar4);//[0,0,0]

let ar5=[1,2,3];
ar5.fill(0,0,1)//change the value 
console.log(ar5);//[0, 2, 3]

//  let ar10=[1,2,3,4,5];
// /let result9=ar10.flatMap(x=>[x,x*3] ); // [1,2 ][2,4][3,6]
// console.log(result9);
//task to make output like  [3, 6, 9, 12, 15]

//multiplu by 3
let ar7 = [1, 2, 3, 4, 5];
let result5 = ar7.map(x => x * 3);
console.log(result5); // [3, 6, 9, 12, 15]

//fillter the same number make
let arr112 = [1, 2, 2, 3, 3, 4, 5];
let result12 = arr112.filter((x, y, z) => z.indexOf(x) === y);
console.log(result12); 

//sort by age 
let a2 = [
    { name: "Hussam", age: 30 },
    { name: "Ali", age: 40 },
    { name: "Ahmad", age: 22 }
];

a2.sort((a, b) => a.age - b.age);

console.log(a2);






 
