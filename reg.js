const express = require("express")
const app = express()
const path = require("path")
const fs = require("fs")
port = 3030

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(__dirname + '/static'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('*', (req, res) => {
    res.sendFile("Registration.html", {root: path.join(__dirname, "./static")})
})

app.post("/reg", (req, res) => {
    console.log(req.body)
    fs.appendFile("data.txt", JSON.stringify(req.body), (err) => {
        if(err) {
            res.status(500).send("Error")
        }
        else {
            res.status(200).send("You have signed up successfully")
        }
    })
})
