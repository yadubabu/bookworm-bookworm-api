import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import auth from './routes/auth';
import Promise from 'bluebird';


const app=express();
dotenv.config();
app.use(bodyParser.json());
mongoose.Promise=Promise;
mongoose.connect("mongodb://localhost:27017/bookworm");
app.use('/api/auth',auth);

app.post('/api/auth',(req,res)=>{
    res.status(400).json({errors:{global:"Invalid Credentials"}});
});

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(8080,()=>console.log('Running on Localhost 8080'));
