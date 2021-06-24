import express from 'express';
import morgan from 'morgan';
import colors from 'colors';
import helmet from 'helmet';
import cors from 'cors';
import compress from 'compression';
import routes from '../routes/index.js';

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compress());
app.use(helmet());
app.use(cors());

app.use('/api/v1', routes);

export default app;
