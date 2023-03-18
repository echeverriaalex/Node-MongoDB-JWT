const mongoose = require('mongoose');
const db = require('./index');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es obligatorio'],
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatorio'],
    }
});

const User = db.model('users', userSchema);
module.exports = User;