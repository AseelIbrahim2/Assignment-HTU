import express from "express";
import bodyParser from "body-parser";

const app = express();
// const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

let colors = [
  {
    id: 1,
    color: "red",
    value: "apple",
  },
  {
    id: 2,
    color: "yellow",
    value: "banana",
  },
  {
    id: 3,
    color: "green",
    value: "lime",
  },
  {
    id: 4,
    color: "orange",
    value: "orange",
  },
  {
    id: 5,
    color: "purple",
    value: "grape",
  },
  {
    id: 6,
    color: "brown",
    value: "kiwi",
  },
  {
    id: 7,
    color: "blue",
    value: "blueberry",
  },
  {
    id: 8,
    color: "red",
    value: "apple",
  },
];

app.get("/colors", (req, res) => {
  res.json(colors);
}); // api return all the array

app.get("/random", (req, res) => {
  const randomColor = Math.floor(Math.random() * colors.length);

  res.json(colors[randomColor]);
}); // api return random color or object

app.get("/colors/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const colorObj = colors.find((color) => color.id === id);
  res.json(colorObj);
}); // api return element by id

app.get("/filter", (req, res) => {
  const colorQ = req.query.color;
  const listOfFilterdColor = colors.filter((color) => color.color === colorQ);

  res.json(listOfFilterdColor);
}); // api return filterd values

app.post("/colors", (req, res) => {
  const newColor = {
    id: colors.length + 1,
    color: req.body.color,
    value: req.body.value,
  };
  colors.push(newColor);
  res.status(200).json(newColor);
}); // create new object in color array

app.put("/colors/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedColor = {
    id: id,
    color: req.body.color,
    value: req.body.value,
  };
  const colorIndex = colors.findIndex((color) => color.id === id);
  colors[colorIndex] = updatedColor;
  res.json(updatedColor);
}); // should give value #$%#%$#%$^$^^*&^*$%T%
// this api edit the object but you should edit the value in the body before send the api link

app.patch("/colors/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const colorObj = colors.find((color) => color.id === id);

  const updatedColor = {
    id: id,
    color: req.body.color || colorObj.color,
    value: req.body.value || colorObj.value,
  };
  const colorIndex = colors.findIndex((color) => color.id === id);
  colors[colorIndex] = updatedColor;

  res.json(updatedColor);
}); // api edit certain attribute not all the object ya3ne edit color or valur or both

app.delete("/colors/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const colorIndex = colors.findIndex((color) => color.id === id);

  if (colorIndex > -1) {
    colors.splice(colorIndex, 1);
    res.sendStatus(200);
  } else {
    res.status(404).json({ error: `color id ${id} not found` });
  }
});// api delete object by id

app.delete("/all",(req,res)=>{
  colors =[];
  res.sendStatus(200);
})//delete all the objects!


app.listen(port, () => {
  console.log("Server running correctly");
});
