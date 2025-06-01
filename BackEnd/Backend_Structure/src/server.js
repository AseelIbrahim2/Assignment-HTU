// operate the server
import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from "url";
import router  from "./routes/usersRoutes.js";

dotenv.config();
const app =express();

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(_dirname, '../public')));

// app.use(express.static(_dirname,'../public'));

app.use('/', router)



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
  

