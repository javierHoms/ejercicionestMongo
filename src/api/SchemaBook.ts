import * as mongoose from 'mongoose';

export const Book = new mongoose.Schema({
    id: Number,
    titulo: String,
    autor: String,
    fecha: Date
});