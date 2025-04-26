// import express from "express";
// import bodyParser from "body-parser";
// import{dirname } from "path"
// import { fileURLToPath } from "url";

// const __dirname =dirname(fileURLToPath(import.meta.url))

// const app = express();
// const port = 3002;


// app.use(bodyParser.urlencoded({extended:true}))

// app.get("/", (req, res) => {
//     const today= new Date();

//     const day = today.getDay();

//    let type= "a weekday "
//    let adv ="it's time to work "

//    if(day === 5 || day === 6){
//     type="the weekend "
//     adv="it's time to have some fun "
//    }
//    res.render("index.ejs" , {
//     type:type,
//     adv:adv,

//    })

//   });
// app.listen(port, () => {
//   console.log("server is done");
// });

