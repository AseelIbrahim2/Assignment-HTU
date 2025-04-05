// //numbers in java 

// let v1=10;
// let result=v1*(5 +3);//الاولوية للاقواس دائما بعدين ضرب قسمة بنبدأ شمال يمين 

// v1++;// add 1 to v1 //
// v1--;// sub a to v1
// ++v1;
// --v1;

// if (v1++<11){// اول اشي بعمل مقارنة بعدين +1

// }
// if (++x<11){// اول اشي بعمل +1 بعدين بعمل مقارنة 

// }

// //looping تكرار كود بدون duplicate 

// for( let x=0;x<10 ; x++ ){
//     console.log(x)
// }


let x=10;
// let y=30;

// let result=0;
// result=result+x+y;
// result+= x+y // result + x+y


// for( let x=0;x<array.length ; x+2 ){
//     array[x]
// }

let array=[1,2,3,4];

for(let x of array){// x هي القيمة لل indix // 
 if(x === 3){

    //break; // بعمل بريك للloop كامل 

    continue; // بعدها لا يمكن تنفيذ اي اشي 
    // بس بروح لل update stat

 }

}
console.log(x);

// let i=2;
// while (i<=10){

//     i++ //update stat رح تكون هون مش زي for

//     console.log(i)

// }

// do{
//     console.log(i);
//     i++;
// }while(i<3);


let obj={
    name:'fa',
    age:10,
    maskPhone:79,
}

for (let key in obj){
    console.log(key);
}

