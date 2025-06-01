import pool from "../config/db.js";

//Create
//we export the createUser method

export const createUsers = async (req,res) =>{
    const {name,email} = req.body;
    try{
        await pool.query("INSERT INTO users (name,email) VALUES ($1,$2)",[
            name,
            email,
        ]);
    }catch(err){}
   
}

//Read
export const getUsers = async (req,res) =>{
    const result = await pool.query("SELECT * FROM users");
    res.render('index.ejs',{users:result.rows});
}

//Update
export const updateUsers = async (req,res) =>{
    const {name,email} = req.body;
    const id = req.params.id;
    await pool.query("UPDATE users SET name= $1 , email = $2 WHERE id = $3",[
        name,
        email,
        id,
    ]);
}

//Delete
export const deleteUsers = async (req,res) =>{
    const id = req.params.id;
    await pool.query("DELETE FROM users WHERE id=$1", [id]);
    res.sendStatus(204);
}











