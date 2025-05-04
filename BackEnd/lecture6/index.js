import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3002;

app.set('view engine', 'ejs');  
app.set('views', path.join(__dirname, 'views'));  

app.use(bodyParser.urlencoded({ extended: true }));


const Array1 = ["Lina", "Sara", "Omar", "Khaled", "Maya", "Noor", "Hadi", "Yara", "Tariq", "Leen"];
const Array2 = ["Amir", "Layla", "Zaid", "Dina", "Hassan", "Nada", "Rami", "Salma", "Fadi", "Mona"];

app.get("/", (req, res) => {
   
    const allNames = [...Array1, ...Array2];

 
    const randomIndex = Math.floor(Math.random() * allNames.length);
    const randomName = allNames[randomIndex];

    const data = {
        title: "Random Name Generator ",
        randomName,
        namesList: allNames
    };

    res.render("index", data);  
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
