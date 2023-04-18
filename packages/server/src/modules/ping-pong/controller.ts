import type { Request, Response } from 'express';

export const returnPong = (_req: Request, res: Response): Response => {
  res.status(200);
  return res.json({ message: 'pong' });
};

export const postPong = (req: Request, res: Response): Response => {
  console.log(req.body);
  return res.json({});
};
