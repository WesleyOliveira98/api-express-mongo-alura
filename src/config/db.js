import mongoose from 'mongoose'
import {} from 'dotenv/config';

const user = process.env.USER;
const pass = process.env.PASS;

mongoose.connect(`mongodb+srv://${user}:${pass}@aluraapi.l8lz5.mongodb.net/alura-node`);

export default mongoose.connection;