import express from "express";
import axios from "axios";

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/submit", async (req, res) => {

    try {
        const response = await axios.get("http://localhost:8080/api/v1/public/stocks", {params: {query: req.body.Stockname}});
        res.render("index.ejs", {content: response.data.data.data});
    } catch (error) {
        console.log(error.message);
        res.render("index.js")
    }
    
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
})