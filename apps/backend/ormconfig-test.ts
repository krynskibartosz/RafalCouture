import * as dotenv from 'dotenv';

dotenv.config();

export const testDBConfig = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  // @ts-ignore
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_TEST,
  entities: ['./domain/entities/*.ts'],
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
  logging: false
};
