import express from 'express';

export const handleError = (res: express.Response) => (error: { message: string }) => {
  res.status(500).json({ message: error.message });
};
