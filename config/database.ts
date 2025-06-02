import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const conexionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI ?? "");

    console.log("Conexión a la base de datos exitosa");
  } catch (error) {
    console.error("Error al conectar a la base de datos", error);
    process.exit(1); 
  }
};

export default conexionDB;