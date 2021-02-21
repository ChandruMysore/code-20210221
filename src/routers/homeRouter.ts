import express from 'express';
import * as homeController from '../controllers/homeController';

let homerouter = express.Router();

homerouter.get('/CSVData', homeController.GetDataFromCSV);

export default homerouter;


