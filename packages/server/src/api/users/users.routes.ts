import { Router, Request, Response } from 'express';
import User from './users.model';

const router = Router();

router.get('/', (_req: Request, res: Response<User[]>) => {
  res.json([
    {
      firstName: 'Wilder',
      lastName: 'Smith',
      email: 'wichos80@gmail.com',
      username: 'wrinconi',
      password: 'Wi123@',
      role: 'admin',
    },
  ]);
});

export default router;
