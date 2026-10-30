import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import {DB_name} from './constants.js'
import connectDB from './db/index.js'

connectDB();

// import express from 'express';
// import dotenv from 'dotenv';
// dotenv.config();    
// ;(async () =>{
//     try{
//         mongoose.connect(`${process.env.MONGO_URI}/${DB_name}`)
//         app.on("error", (err) => {
//             console.error("ERROR:" , err);
//             throw err
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Server listening on port http://localhost:${process.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.error("ERROR:" , error)
//         throw err
//     }
// });

// connectDB();

