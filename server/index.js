import express from 'express';
import { connect } from '../config/dbconfig.js';
const app = express();
const router = express.Router();
connect();
const port = 8080;
app.use(express.json());

app.listen(port, console.log(`server listening on to the port: ${port}`));
