import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';
import rolRouters from './routes/rol.routes.js';
import usuarioRouters from './routes/usuario.routes.js';
import demeritoRouters from './routes/demerito.routes.js';
import razonRouters from './routes/razon.routes.js';
import estudianteRouters from './routes/estudiante.routes.js'; 
import gradoRouters from './routes/grado.routes.js';
import estadoRouters from './routes/estado.routes.js';
import historialRouters from './routes/historial.routes.js';
const app = express();
// Settings
app.set('port', 4000);
//estoe es para que el puerto sea dinamico si necsita desplegar en un servidor
//app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/signout', require('./routes/signout.routes.js'));
app.use('/api/todos', require('./routes/todos.routes.js'));
app.use('/api/refreshToken', require('./routes/refreshToken.routes.js'));
app.use('/api/login', require('./routes/login.routes.js'));


// Routes
app.use("/historial", historialRouters);
app.use("/estado", estadoRouters);
app.use("/demerito", demeritoRouters);
app.use("/rol", rolRouters);
app.use("/usuario", usuarioRouters);
app.use("/razon", razonRouters);
app.use("/estudiante", estudianteRouters);
app.use("/grado", gradoRouters);
export default app;
