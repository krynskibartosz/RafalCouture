import express, { Router } from 'express';
import { check } from 'express-validator';
import { StatusCodes } from 'http-status-codes';

import { ShoppingItemService } from '../services/shopping';
import { ShoppingItemDAO } from '../../application/dao/shopping-item';
import { asyncHandler } from '../middleware/asyncHandler';

var cors = require('cors');

const router = Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
var corsOptions = {
  origin: 'http://127.0.0.1:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
router.use(cors(corsOptions));

router.post(
  '/shopping-item',
  [check('name').isString(), check('price').isNumeric()],
  // @ts-ignore

  async (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With');
    const { name, price } = req.body;
    try {
      await new ShoppingItemService(new ShoppingItemDAO()).createShoppingItem(name, price);
      res.status(StatusCodes.OK).json({ message: 'Shopping item created successfully' });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
);

router.get(
  '/shopping-items',
  asyncHandler(async (_: any, res: any) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With',
      'Content-Type',
      'Accept'
    );
    const items = await new ShoppingItemService(new ShoppingItemDAO()).getAllShoppingItems();
    res.status(StatusCodes.OK).json(items);
  })
);

export default router;
