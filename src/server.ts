import app from './apps';
import conexionDB from '../config/database';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;

const startServer = async () => {
  try {
    await conexionDB();
    console.log('Base de datos conectada');

    app.listen(PORT, () => {
      console.log(`Servidor corriendo ${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor', error);
    process.exit(1);
  }
};

startServer();