const express = require("express");
const app = express();

const users = [{
    name: "rishi",
    kidneys:[{
        healthy: false
    }]
}]

app.use(express.json())

app.get("/", function (req, res) {
    const rishiKindeys = users[0].kidneys;
    const numberOfKidneys = rishiKindeys.length;
    const numberOfHealthyKidneys = 0;
    for ( let i = 0; i < rishiKindeys.length; i++ ){
        if(rishiKindeys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done!"
    })
})

app.put("/", function (req, res) {
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
})

app.listen(3000)