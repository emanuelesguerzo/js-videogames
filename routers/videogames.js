const express = require("express");
const router = express.Router();
const gamesData = require("../data/videogames")

// Index
router.get("/", (req, res) => {
    res.json({
        data: gamesData,
        count: gamesData.length,
    })
})

// Show
router.get("/:id", (req, res) => {
    const gameId = req.params.id;
    res.json(gamesData);
})

// Create
router.post("/", (req, res) => {
    res.json("Creiamo un nuovo elemento");
})

// Update
router.put("/:id", (req, res) => {
    const gameId = req.params.id;
    res.json("Modifichiamo i dati di uno specifico elemento " + gameId);
})

// Modify
router.patch("/:id", (req, res) => {
    const gameId = req.params.id;
    res.json("Modifichiamo alcuni dati di uno specifico elemento " + gameId);
})

// Destroy
router.delete("/:id", (req, res) => {
    const gameId = req.params.id;
    res.json("Cancello l'elemento " + gameId);
})

// Exports
module.exports = router;