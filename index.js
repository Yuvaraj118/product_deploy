const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRouter = require('./Routes/ProductRoutes')

app.use(express.json())
app.use("", productRouter);

app.listen('5000', ()=> console.log('server running on 5000'))

mongoose.connect('mongodb+srv://Yuvaraj:181024yr@myprojectcluster.lbvcn.mongodb.net/?retryWrites=true&w=majority&appName=MyProjectCluster')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))


    console.log("Successfully Updated");
    
app.get ('/',(req,res)=> {
    res.send("Server Reacted")
})
