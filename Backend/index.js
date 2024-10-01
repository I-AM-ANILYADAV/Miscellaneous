const express = require("express");
const app = express();

let port = 8080;



app.use (express.urlencoded({extended:true}));
app.use(express.json());
app.get("/register", (req,res) =>{
    let{user, password} = req.query;
    res.send(`Standard get response welcome :${user}`);
})
app.post("/register", (req,res) =>{
    let{user, password} = req.body;
    // console.log(req.body);
    res.send(`Standard post response welcome:${user}`);
})

app.listen(port , () =>{
    console.log(`Listening to port${port}`);
})