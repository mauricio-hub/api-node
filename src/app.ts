import express , {Application} from 'express';
import userRoutes from './routes/user.routes'


const app: Application = express();


app.use(express.json());

app.use('/api/users', userRoutes);


export default app;

/**
 * APP
 * Configura la aplicación Express.
 * - Middlewares globales
 * - Rutas
 * - Middleware de manejo de errores
 * 
 * NO levanta el servidor.
 */