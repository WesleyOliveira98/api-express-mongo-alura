import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://wesley:pass123@aluraapi.l8lz5.mongodb.net/alura-node");

export default mongoose.connection;