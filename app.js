const express = require("express");
const app = express();
const port = 3000;
const gamesRouter = require("./routers/videogames");

app.use("/videogames", gamesRouter);

//Index
app.get("/", (req, res) => {
    res.json("Hello World");
})

//Listen
app.listen(port, () => {
    console.log(`Il server e' in esecuzione sulla porta ${port}`)
})