const express = require('express')
var datetime = require('node-datetime');
// console.log(datetime)
var dt = datetime.create();
var formattedDate = dt. format('m/d/y');
// console. log(formattedDate);

const random = require('random')


const app = express();
app.use(express.json());

const port_number = 8000;
const hostName = "localhost/"

const connect = require('./connection/connect');
const db = require('./model/item')


app.get('/get',(req,res)=>{
    db.find()
    .then((data)=>{
        res.send(data)
        console.log("Total students: "+data)
    })
})

app.get('/get/:id',(req,res)=>{
    var id = req.params.id
    db.find({id:req.params.id})
    .then((data)=>{
        res.send(data[id-1])
        console.log("you got the data---")
    })
})

app.post('/admit',(req,res)=>{
    db.find()
    .then((data)=>{
        var newStudent = new db({
            id:data.length+1,
            name:req.body.name,
            phone_number:req.body.phone_number,
            AdmitNum:random.int(min = 4000, max =5000),
            Hobbies:req.body.Hobbies,
            date:formattedDate
        })
        newStudent.save()
        .then((data)=>{
            res.send('new student admit--')
            console.log("new student admit--")
        })
    })
})

app.put('/put/:id',(req,res)=>{
    var id = req.params.id;
    var updatedData = db.updateOne({id:req.params.id},{$set:{
        name:req.body.name,
        phone_number:req.body.phone_number,
    }})
    .then((data)=>{
        res.send(data)
        console.log(data)
    })
})

app.delete('/del/:id',(req,res)=>{
    var id = req.params.id;
    var deletedData = db.deleteOne({id:req.params.id})
    .then((data)=>{
        res.send("deleted data---")
        console.log('deleted data ---')
    })
})

app.listen(port_number,()=>{
    console.log('server is strated @ 8000')
})