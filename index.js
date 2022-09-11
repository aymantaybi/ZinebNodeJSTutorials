const express = require("express");

const app = express();

app.get("/api/login", (req,res) => {

    console.log(req.query)

    res.send("Hello "+req.query.user+" !");
})

app.listen(6780, () => {
    console.log("App server live")
})
