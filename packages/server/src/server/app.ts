/* eslint-disable prettier/prettier */
import cors from 'cors';
import express from 'express';
import { Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import * as middlewares from '../utils/middlewares';
import api from '../api';
import MessageResponse from '../interfaces/MessageResponse';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>('/', (_req: Request, res: Response) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
