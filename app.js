import express from 'express';
import cors from 'cors'
import mongoose from "mongoose";
// mongoose.connect('mongodb://localhost:27017/tuiter');
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
                          || 'mongodb://127.0.0.1:27017/tuiter'
// const CONNECTION_STRING = 'mongodb+srv://giuseppi:supersecretpassword@cluster0.tbm0dq3.mongodb.net/tuiter?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_STRING);


import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";

const app = express();
app.use(cors())
app.use(express.json());
HelloController(app)
UserController(app)
TuitsController(app)
app.listen(process.env.PORT || 4000);

