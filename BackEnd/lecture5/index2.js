import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3002;

app.set('view engine', 'ejs');  // تحديد محرك العرض (EJS)
app.set('views', path.join(__dirname, 'views'));  // تحديد مجلد الـ views

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const seconds = new Date().getSeconds();
    const data = {
        title1: "My Favorite Fruits",
        seconds,
        items: ["Apple", "Banana", "Cherry"],
        htmlContent: "<strong>Enjoy your healthy fruits!</strong>",
    };
    res.render("index2", data);  // تأكد أن اسم الملف هنا صحيح
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
