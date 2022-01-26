const express = require('express')
const fs = require('fs')
const cors = require('cors');
const { json } = require('body-parser');
const { count } = require('console');
const app = express();
const port = 3000;
const path = "./Data.json";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    let rawData = fs.readFileSync(path)
    let data = JSON.parse(rawData)
    res.send(JSON.stringify(data))
});


app.post('/', (req, res) => {
    let data = {DicFName: req.body.DicFName, DicLName: req.body.DicLName, DicBYear: req.body.DicBYear, DicDYear: req.body.DicDYear, DicDesc: req.body.DicDesc};

    
    if(data.DicFName){
        let rawdata = fs.readFileSync(path);
        let jsondata = JSON.parse(rawdata);
        jsondata["Count"]++;
        console.log(jsondata["Count"])
        jsondata["Dictators"][jsondata["Count"].toString()] = data;
        fs.writeFileSync(path, JSON.stringify(data));
    }else{
        res.end("Name Is Missing");
    }

    res.end(JSON.stringify(data));
})
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))