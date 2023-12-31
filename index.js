import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);


const PORT = process.env.PORT || 5000;

// mongoose.connect(constants.CONNECTION_URL).then(() => app.listen(constants.PORT, () => console.log(`Server Running on Port ${constants.PORT}`)))
// .catch((error) => console.log(error.message));

// mongoose.Promise = global.Promise;

mongoose.connect( process.env.CONNECTION_URL, { useNewURLParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));


// https://www.mongodb.com/cloud/atlas




