require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
mongoose.set("strictQuery", false);

const workoutRoutes = require('./routes/workout.js')

//express app
const app = express()

//middleware
// app.use((req,res,next)=>{
//   console.log(req.path,req.method)
//   next()
// })
app.use(express.json())

//routes
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose.connect(process.env.MONG_URL)
.then(()=>{
  //listen for requests 
  app.listen(process.env.PORT,() => {
    console.log('listening on port',process.env.PORT)
  })
})
.catch((error)=>{
  console.log(error)
})

