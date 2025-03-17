import mongoose from "mongoose";
export const  connect=mongoose.connect(process.env.connectdb).then(()=>console.log('i am connected to databse')).catch(()=>console.log('sorry i could not connect to the databse'));
