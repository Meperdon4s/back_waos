
import express from "express";
import cors from "cors";
import routes from "./routes";
import mongoose from "mongoose";



const app = express();

//conexion a base de datos
mongoose.Promise=global.Promise;
const dbUrl='mongodb+srv://rafaguzman:VthMC4E8f8IT33Nq@cluster0.gvqmluk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbUrl)
.then(mongoose=>console.log('Conectado a la bd en el puerto 27017'));
//Listening de puertos
app.set('port', process.env.PORT || 4000);

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api",routes);

app.listen(app.get('port'), () => {
  console.log(`Example app listening on port:` + app.get('port'));
})

