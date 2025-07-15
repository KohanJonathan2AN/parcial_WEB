import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user_routes';
import postRoutes from './routes/post_routes';

const app = express();
app.use(cors({origin: "http://localhost:2575", credentials: true}));
app.use(express.json());

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});

export default app;