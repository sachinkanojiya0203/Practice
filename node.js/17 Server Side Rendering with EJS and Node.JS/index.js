const express=require('express')
const router=express.Router()
const app=express()
const port=8001






app.listen(port,()=>console.log(`server started ${port}`))