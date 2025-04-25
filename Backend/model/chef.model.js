import mongoose from "mongoose";

// "id":1,
// "name":"Zalmis Kitchen",
// "title":"lorem epsum xyz xyz xyz lorem",
// "image":"zalmikitchen.jpg"
// //schema for our data base

const chefSchema=mongoose.Schema({
id:Number,
name:String,
title:Number,
image:String

})

//model of the schema
const Chef=mongoose.model("Chef",chefSchema);  //any data that will come and get saved in CHEF NAMED DATABASE

export default Chef;