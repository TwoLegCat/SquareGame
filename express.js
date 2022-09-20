const express = require('express');
const app = express();
app.use(express.static("public"));
app.get("/game", (req, res) => {
    res.sendFile(__dirname + "/public/templates/game.html")
})
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/public/templates/log.html")
})
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/templates/index.html")
})
app.listen(9091, () => {console.log("Express server listening on 9091")});