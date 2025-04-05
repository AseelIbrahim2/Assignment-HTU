 //number
 let x=13;
let y=1.5;

//string
let name1="fatima";
let lastName="ahmad";

//Booleans
let z = true;
let w = false;

//object
let person ={
    number :"076843512845",
    age :30,
    salary: 5786453,
};

//array
let car=["bmw", "WW" ,"Kia" ];

//Dateobject
let date=new Date();


let result =name1+ " "+lastName+" "+x +" "+z;
let result1=z+x;
 // بتعامل في حالة الجمع ال boolean ك رقم 
console.log(result);
console.log(result1); 
//هون النتاتج 14 لانه ال ture=1

console.log(typeof result);
console.log(typeof result1);
console.log(typeof person);

//funcation how to use
function firstFun(x,y){
    return x+y;
}
console.log(firstFun(10,15));  

function toCelsius(fer){
    return (5/9) * (fer-32);
}
console.log(toCelsius(90));  

//object 
let cars={
    name1:"fint",
    model:"e200",
    color:"red",
    info:function(){
        return this.name1+" "+this.model+this.color;
    },
};

let cars1={
    name1:"fint",
    model:"e200",
    color:"red",
    info:function(){
        return this.name1+" "+this.model+this.color; //funcation inside the object = (Methode)
    },
};
   cars1.print=function(){
    return this.name1+" "+this.model;  //we can  add property and methode 

   }
   cars1.country={
        name:"jordan",
        id:"JD",         //we add new proparety  
   }

   console.log(cars1.print());
   console.log(cars1.country.name);



// console.log(this.confirm ("are you sure")); 



let user={
    name:"Fatima",
    age:"35",
    salary:"2000jd",  
    car:{
        name:"BMW",
        model:"M3", 

    }
     
}

 // user.number="079647964865";// first methode to add property 
  //console.log(user.number);

  user['number2']="06453";// sec methode to add property 
  console.log(user.number2); // هون في المرة الأ,لى عادي طبع الرقم 
  delete user['number2'];// we use delete methode for object
  console.log(user.number2);// مارح يطبع الرقم لانه حذفناه undefined
  console.log(user); //ببين عندي انه انحذف الرقم 

console.log(cars.model); 
console.log(cars.info());

console.log(user.name);// first methode for access the object 
console.log(user["age"]);// sec methode for access the object 

console.log(user.car.name);//هون كيف اوصل ل اسم السيارة في حالة ال nested object


//document.getElementById("demo").innerHTML=user.name; //the html will print the name
//document.getElementById("demo").innerHTML=cars1.info(); //رح يطبع ال funcation هي طريقة او loop 


//methode for print the object in html
let result2="";

for(let x in user)
    result2=result2+" "+user[x];
//document.getElementById("demo").innerHTML=result2; 


//methode for print the object in html using object class
//document.getElementById("demo").innerHTML=Object.values(user); 

//print the valuse for user with proparity as string 
//document.getElementById("demo").innerHTML=JSON.stringify(user); //stringify convert the object into string and print it 

if (user.age>30){
    document.getElementById("demo").innerHTML="age >30";
}
else if(user.age ===30){
    document.getElementById("demo").innerHTML="age <30";

}
let day
switch(new Date().getDay()){
    case 0:
     day="sunday";
     break;
     
     case 1:
    day="monday";
     break;

}
console.log(day);

let person2 = {
  name: "Hussam",
  age: 30,
  city: "Amman",
};

for (let key in person2) 
  console.log(key + ": " + person2[key]);

  














 