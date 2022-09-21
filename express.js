const express = require('express');
const port = 9091;
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
app.listen(port, () => {console.log(`Express server listening on ${port}`)});