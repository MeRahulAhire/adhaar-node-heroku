const express = require('express');
var parseString = require('xml2js').parseString;
const app = express();
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    res.send(<h1>heroku deployed</h1>)
})

app.post('/adhaarJson', (req,res) => {
    const xmlData = req.body.adhaarData
    // res.send(xmlData)
    parseString(xmlData, function (err, adhaarJson) {
        res.send(adhaarJson)
        // console.log(adhaarJson)
    });
})

app.listen(process.env.PORT || 4000)
