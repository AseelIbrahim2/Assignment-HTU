//object 
let person ={
    name:'ali',
    age:22,

    print:function() {},
    address:{
        street:'test',
        buildnum:5
    }
};

// creat new object
// creat new ins => نوع object 
let car=new Object();
car.model="BMW"//اضافة property for object 

console.log(car)

// person.age//access property 
// console.log(person.__proto__)
//person.__proto__ يفتح ال prtot الموجود فيه 
//object inheritance يعتمد على prototype
let car= new Object()//all the method and property in the object ()

// //inheritance 
// // creat new object من نوع person 
// //اعطيه ال object يلي بده يعمل توريث )(inheritance)
// let studant =Object.create(person)
// console.log(studant)

// console.log(person.__proto__)//بدخل على ال proto الخاصة في هاد الobject 

// //cloning 
// //نسخ لل object تبعناا 
// //نسخ  in new  one (creat object) deep copy and shallow copy    

// //spread operator //وظيفتها تنسخ object (...)
let person2={...person};
// console.log(person);
// console.log(person2) //ضل الاسم علي 

person2.name='hussam';
// console.log(person);//ضل الاسم علي 
// console.log(person2)//هون اتغير اسمه ل حسام 

// //shallow copy can do it in the first(سطحي level 1) object , does not work with another object (level2) address 
// //make mistake  بعدل ع الاساس وبغيره 

// person2.address.street='test2';
// console.log(person);//تغيرت ال test2
// console.log(person2)//تغيرت ال test2


// //رح يتعدل دايركت ع object الاول والثاني 
// let person3=Object.assign(person);


//deep  cloning  json avascript object notation
 //convert object to json strinng 

//  let person2=JSON.stringify(person);
 console.log(person2);
 //ارجعه طبيعي بعد ماصار string
 let person5=JSON.parse(JSON .stringify(person));
 console.log(person5);
//using deep colning 
 person5.name='hussam';
 person5.address.street='test2';
 console.log(person5); // person5 تغير صار حسام وtest2 
 // بدول ما يعدل ع اول object (person )

 //let person6=structuredClone(person);//ما بنستخدمها كثير انسوها بطيئة استخدمو json
 //keys for the name of property
for(let key in person){
    console.log(key+":" + person[key]);
}

 console.log(Object.keys(person));// name age print adress
 console.log(Object.values(person));// ali 22 ..ect
 console.log(Object.entries(person));//array key and val


//methode in object 

// Object.freeze(person2) //يمنع ال تعديل عليها  (add or edit or delete )
// person2.age=10;
 //delete person2.age // هون الحذف 
// console.log(person2);


//تمنع ال add and delete 
//تسمح ال (edit)
Object.seal(person2)




