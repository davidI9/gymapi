import { getWorkoutsList } from '../GetWorkoutsList/GetWorkoutsList.js';
import express from 'express';
import {router} from '../../../main.js';


const app = express()

app.use('/', router);

app.get('/:userId/', (req, res) => {
    res.send(getWorkoutsList(req.params.userId))
})

app.listen('3000', () => {
    console.log('Servidor corriendo en http://localhost:3000')
})