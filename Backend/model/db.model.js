import mongoose from "mongoose";
const schema=new mongoose.schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
})

const model=mongoose.model('authentication',schema,'authentication')
export default model;