import express from 'express';
import morgan from 'morgan';
import rolRouters from './routes/rol.routes.js';
import usuarioRouters from './routes/usuario.routes.js';
import demeritoRouters from './routes/demerito.routes.js';
import razonRouters from './routes/razon.routes.js';
import estudianteRouters from './routes/estudiante.routes.js'; 
import gradoRouters from './routes/grado.routes.js';
const app = express();
const cors = require('cors');

// Settings
app.set('port', 4000);
//estoe es para que el puerto sea dinamico si necsita desplegar en un servidor
//app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.use("/demerito", demeritoRouters);
app.use("/rol", rolRouters);
app.use("/usuario", usuarioRouters);
app.use("/razon", razonRouters);
app.use("/estudiante", estudianteRouters);
app.use("/grado", gradoRouters);
export default app;
