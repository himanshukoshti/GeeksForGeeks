const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Geeks For Geeks</h1>");
});

app.listen(8000, () => {
    console.log("Listen on the port 8000...");
});