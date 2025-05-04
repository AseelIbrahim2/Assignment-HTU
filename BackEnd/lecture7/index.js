import https from "https";
import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
   const options={
    hostname:""
   }
  
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
