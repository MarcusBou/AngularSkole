const express = require('express')
const fs = require('fs')
const cors = require('cors');
const app = express();
const port = 3000;
const path = "./Data.json";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    let rawData = fs.readFileSync(path);
    let data = JSON.parse(rawData);
    res.send(JSON.stringify(data['Dictators']));
});


app.post('/', (req, res) => {
    let data = {DicFName: req.body.DicFName, DicLName: req.body.DicLName, DicBYear: req.body.DicBYear, DicDYear: req.body.DicDYear, DicDesc: req.body.DicDesc};

    
    if(data.DicFName){
        let rawdata = fs.readFileSync(path);
        let jsondata = JSON.parse(rawdata);

        jsondata["Dictators"].push(data);
        fs.writeFileSync(path, JSON.stringify(jsondata));
        res.end("FUCK");
    }else{
        res.end("Name Is Missing");
    }
})

app.delete('/', (req, res) =>{
    let id = req.query.ids;

    if (id) {
        let rawdata = fs.readFileSync(path);
        let data = JSON.parse(rawdata);
        if(data["dictators"][id] != null){
            delete data["dictators"][id];
            console.log(data["dictators"][id]);
            let filteredArray = { "dictators": data["dictators"].filter(function (e) {
                return e != null;
            })};
            fs.writeFileSync(path, JSON.stringify(filteredArray));
            res.end("Deleted" + id);
        }else{
            res.end("Couldnt find index data");
        }
    }
    else {
        res.end('The Required data is not set');
    }
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));