let st1="fatima";

// console.log(st1.length);

let st2="javascript";

// console.log(st2.slice(4));
// console.log(st2.slice(4,10)); //the same  as(4)
// console.log(st2.slice(-6));//في حالة السالب بمشي من اليمين لليسار 

let st3="javascript";
 
// console.log(st3.charAt(9))
//نشيك اول حرف يكون chaptial (charAt)
//بعدين نخليه uppercase 
function chackUsername(username){
    return username.charAt(0).toUpperCase() +username.slice(1)
}  //the rest of the fatima word  معتعديل ع اول حرف

console.log(chackUsername("fatima")); //make the first latter (f) to (F)

let st4="javascript";
// console.log(st4.toUpperCase());
// console.log(st4.toLowerCase());


let st5="          Hello javascript ";

console.log(st5.trim());

function cleanemail(email){
    return email.trim().toLowerCase();
}
console.log(cleanemail(" fatimaAhmad@Gmail   "));


function maskPhone(str){
    return "*".repeat(str.length-3)+ str.substring(str.length-3);//شو ما كان طول الرقم بس اخر 3 ببين 
}

console.log(maskPhone('07985226453589'));

// console.log("Ali".repeat(3))
 
let st7="javascript world";
console.log(st7.replace("world","hello"));//اول تطابق بتلاقيه فقط 

console.log(st7.replaceAll("world","hello"));//كل التطابق بتبدله 

let st8="javascript world wold hello";
console.log(st8.split(" "));

console.log(st8.split("w"));

let st10="javascript world wold hello";

console.log(st10.endsWith("hello"));
 
let fileName="test.jpg"
if(fileName.endsWith(".jpg"));{

}

let st11="javascript world world";
console.log(st11.indexOf("pt"))//اول ظهور ل هاي الكلمة
//اذا ما لقى رح يطلع الناتج(-1)

let st12="javascript world world";
console.log(st11.lastIndexOf("ld"))


