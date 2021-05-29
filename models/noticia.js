const mongoose = require("mongoose");

const NoticiaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es requerido"],
      unique: false,
      trim: true,
      maxlength: [255, "El nombre no lleva mas de 150 caracteres"],
    },
    descripcion: {
      type: String,
      required: [true, "La descripcion es requerida"],
      unique: false,
      trim: true,
      maxlength: [255, "La direccion no lleva mas de 255 caracteres"],
    },
    nombre_periodista: {
      type: String,
      required: [true, "La nombre del periodista es requerido"],
      unique: false,
      trim: true,
      maxlength: [150, "La direccion no lleva mas de 255 caracteres"],
    },
    visible: {
      type: Boolean,
      required: [true, "La visibilidad es requerida"],
      unique: false,
    },
    categoria: {
      type: String,
      required: [true, "La categoria es requerida"],
      unique: false,
      trim: true,
      maxlength: [50, "La categoria no lleva mas de 50 caracteres"],
    },
    hora_noticia: {
      type: Date,
      required: [false, "La hora no es requerida"],
    },
    imagen: {
      type: String,
      required: [true, "La imagen es requerida"],
      unique: false,
      trim: true,
    },
    resumen: {
      type: String,
      required: [true, "El resumen es requerido"],
      unique: false,
      trim: true,
      maxlength: [255, "El resumen no lleva mas de 255 caracteres"],
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Noticia || mongoose.model("Noticia", NoticiaSchema);
