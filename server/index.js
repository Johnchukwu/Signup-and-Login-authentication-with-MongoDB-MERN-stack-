const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://John:<Johnbull4u>@atlascluster.uuhkipz.mongodb.net/?retryWrites=true&w=majority")

app.post("login", (req, res) =>{
    const {email, password} = req.body
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password){
            res.json("success")
        }
        else {
               res.json("invalid password")
        }
    } 
    else{
        res.json("No account existed")
    }

    })
})

app.post('/register', (req, res) => {
      EmployeeModel.create(reg.body)
      .then(employees => res.json(employees))
      .catch(err => res.json(err))
    })

app.listen(3001, () => {
    console.log("server is running")
})