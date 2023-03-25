const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.listen(4000, () => console.log("Server running on 4000"));

app.get("/api/compliment", (req, res) => {
    const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
  
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
  
    res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
    const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", 
    "A faithful friend is a strong defense.", 
    "A fresh start will put you on your way", 
    "A friend is  a present you give yourself.",
    "A good friendship is often more important than a passionate romance",
];
  
    // choose random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];
  
    res.status(200).send(randomFortune);
});

let ultimateFate = ["You will have a bad life!"];

app.get("/api/ultimateFate", (req, res) => res.status(200).send({ ultimateFate }));
app.delete("/api/ultimateFate", (req, res) => {ultimateFate = []; res.sendStatus(204);});