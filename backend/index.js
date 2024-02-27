import express, { request } from "express"
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import router from "./routes/booksRoute.js";
import cors from 'cors';


const app = express();
app.use(express.json());

//option 1 allowed all the options icludes headers and methods and origins
app.use(cors());

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('WELCOME BACK')
});
app.use('/books',router);





//mongo 
mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log('connected to database')
    app.listen(PORT,()=>{
        console.log(`app listen on port ${PORT}`);
    });

})
.catch((error)=>{
    console.log(error);

})