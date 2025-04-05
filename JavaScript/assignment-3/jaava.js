
// text.toLowerCase()

// // using another methode in loop

// let text="HELLOt";
// let target='t';
// let lowercase=' ';


// for (let i=0; i<text.length; i++){
// let charcode=text.charCodeAt(i);//ترجع اسكي 
//  if( charcoad>= 65 && charcode<=90){
//     lowercase += String.fromCharCode(charcode+32);// ترجع ال الحرف يلي بمثل الكود 
//  }
// else{
//     lowercase += text[i];

// }


// }
// console.log(lowercase);
// // a=1
// // A=1+32

//sarch char in any text

// for (let i=0;text.length; i++) {
//    if(text[i] === target){
//     console.log(i)
//     break;
//    }
// }

//make methode for reversed the (hello )
//وظيفته يتأكد من كلمة hello انعكست  olleh 
// تتأكد مافي اشي بغير فيمتها 

// function revers(test){
//     let reversed="";

//     for(let i=test.length-1; i>=0; i--){
//         reversed= reversed+ test[i];
//     }
//     // return reversed ===test; //return most important to call and return 
             
//     // هون true or false مشان نعمل مقارنة 
//     return reversed.toLowerCase()=== test.toLowerCase();
//     // هون حتى لو كان في حرف كبير بزبط 
//     // the result for (Level)= true even with capital latter 
// }

// console.log(revers("Level")); // print true

function fact(x) {
    let result = 1; 

    for (let i = x; i > 1; i--) {
        result *= i; 
    }
    return result;
}











console.log(fact(5)); 

function factWhile(x) {
    let result = 1;
    while (x > 1) {
        result *= x;
        x--;
    }
    return result;
}

console.log(factWhile(5)); // Output: 120
