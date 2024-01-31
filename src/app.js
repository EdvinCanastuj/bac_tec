import express from 'express';
import morgan from 'morgan';
import rolRouters from './routes/rol.routers.js';
import usuarioRouters from './routes/usuario.routers.js';

const app = express();
const cors = require('cors');

// Settings
app.set('port', 4000);
//app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes

app.use("/rol", rolRouters);
app.use("/usuario", usuarioRouters);
export default app;
