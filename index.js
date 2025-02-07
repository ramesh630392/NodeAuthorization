import express, { request, response } from 'express';
import dotenv from 'dotenv';
import {mongooseDb} from './config/db.js';
import usersRoutes from './routes/usersApi.js';
import productsRouter from './routes/product.js'


const app = express();
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 3001;

app.use('/users', usersRoutes);

app.use('/products', productsRouter);

app.listen(port, ()=>{
    console.log(`Server Running at Port Number  ${port}`);
    mongooseDb();
});


