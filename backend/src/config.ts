import { Sequelize } from 'sequelize-typescript';
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize({
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'eventbuddy',
    password: process.env.DB_PASS || 'secret',
    database: process.env.DB_NAME || 'eventbuddy_db',
    models: [__dirname + "/models"],
    dialect: "postgres",
    logging: console.log
})

