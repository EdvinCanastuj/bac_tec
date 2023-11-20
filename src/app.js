import express from 'express';
import morgan from 'morgan';

const app = express();
const cors = require('cors');

app.set('port', 3000);

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

export default app;
