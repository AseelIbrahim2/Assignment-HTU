// import express from "express";

// const app= express(); //app == express generate backend application 
// const port =3000;

// // app.get('/about' ,(req,res) => {
// //     res.send("<h1>Hello</h1> ");     // methode in send the data the landing page the first page can user see it 
// // });
// app.get('/login' ,(req,res) => {
//     res.send("<h1>Hello, login</h1> ");     // methode in send the data the landing page the first page can user see it 
// });

    //  app.post("/about" ,(req,res) => {//route handler "/about"
    //     console.log(req.body)
    //  });

// app.get('/login', (req, res) => {
//   res.send(`
//     <h1>Login Page</h1>
//     <form action="/login" method="post">
//       <label>Email:</label><br>
//       <input type="email" name="email" required><br><br>

//       <label>Password:</label><br>
//       <input type="password" name="password" required><br><br>

//       <button type="submit">Login</button>
//     </form>
//   `);
// });

// app.listen(port,() =>{
//     console.log("server is done");
// });

// import express from "express";
// import bodyParser from "body-parser";
// import{dirname } from "path"
// import { fileURLToPath } from "url";

// const __dirname =dirname(fileURLToPath(import.meta.url))

// const app = express();
// const port = 3000;
// let userInfo={
//     email:null,
//     passward:null,
// }


// app.use(bodyParser.urlencoded({extended:true}))

// function saveToDb(req, res, next) {
//     if(req.body){
//     userInfo.email = req.body.email;
//     userInfo.passward = req.body.passward;}
//     next();
//   }
  

// app.use(saveToDb)

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html");
//   });
  
//   app.post("/sumbit", (req, res) => {
//     console.log(req.body);
//     res.send(<h1>Your email: ${userInfo.email} and password: ${userInfo.passward}</h1>);
//   });
  

// app.listen(port, () => {
//   console.log("server is done");
// });


//middle ware => npm i body-parser
    //وسيط بين العميل