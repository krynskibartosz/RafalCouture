import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

import { ShoppingItem } from '../domain/entities/shopping-item';
import { testDBConfig } from '../ormconfig-test';
import { dbConfig } from '../ormconfig';

dotenv.config();

let config;
if (process.env.NODE_ENV === 'test') {
  config = testDBConfig;
} else {
  config = dbConfig;
}
// @ts-ignore
export const db = new DataSource({
  ...config,
  entities: [ShoppingItem]
});

export const connectDatabase = async (): Promise<void> => {
  try {
    await db.initialize();
    console.log('Connection to the database is successful');
  } catch (err) {
    console.error('Error connecting to the database', err);
    throw new Error(`Error connecting to the database: ${err}`);
  }
};
