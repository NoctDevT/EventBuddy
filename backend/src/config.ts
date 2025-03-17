import { Sequelize } from 'sequelize-typescript';
import dotenv from "dotenv";
import User from './types/user';
import Event from './types/event';
dotenv.config();

export const sequelize = new Sequelize({
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'eventbuddy',
    password: process.env.DB_PASS || 'secret',
    database: process.env.DB_NAME || 'eventbuddy_db',
    models: [Event, User],
    dialect: "postgres",
    logging: console.log
})

