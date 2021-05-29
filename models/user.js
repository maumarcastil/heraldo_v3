const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es requerido"],
    unique: false,
    trim: true,
    maxlength: [100, "El nombre no lleva mas de 100 caracteres"],
  },
  direccion: {
    type: String,
    required: [true, "La direccion es requerido"],
    unique: false,
    trim: true,
    maxlength: [50, "La direccion no lleva mas de 50 caracteres"],
  },
  telefono: {
    type: String,
    required: [true, "El telefono es requerido"],
    unique: false,
    trim: true,
    maxlength: [11, "El Telefono lleva 10 numeros"],
  },
  usuario: {
    type: String,
    required: [true, "El usuario es requerido"],
    unique: true,
    trim: true,
    maxlength: [50, "El usuario no lleva mas de 50 caracteres"],
  },
  contrasena: {
    type: String,
    required: [true, "La contraseña es requerida"],
    unique: false,
    trim: true,
    maxlength: [50, "El usuario no lleva mas de 50 caracteres"],
  },
  correo: {
    type: String,
    required: [true, "El correo es requerida"],
    unique: true,
    trim: true,
    maxlength: [100, "El usuario no lleva mas de 100 caracteres"],
  },
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
