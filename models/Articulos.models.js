import mongoose from "mongoose";

const articulos=mongoose.Schema(
    {
        titulo:String,
        autor:String,
        categoria:String,
        descripcion:String,
        calificacion:{type:Number, default:0, required:false}
    }
);

const Articulos=mongoose.model('Articulos',articulos);

export default Articulos;