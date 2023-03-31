import express, {Request, Response} from 'express';
import mongoose from './db';
import messageRoutes from './routes/messageRoutes';

const app = express();

app.use(express.json());

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api/messages', messageRoutes);

app.use((error: Error, req: Request, res: Response) => {
  console.error(error.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app; 
