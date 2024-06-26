import routerx from "express-promise-router";
import Datosctr from "../controllers/Datos.controller";

const router = routerx();

router.post("/saveData", Datosctr.postDatos);
router.get("/buscar", Datosctr.getDatos);
router.delete("/eliminar/:id",Datosctr.delDatos);
router.patch("/actualizar/:id",Datosctr.putDatos);
router.post("/saveArticulo", Datosctr.postArticulos);
router.get("/buscarArticulo", Datosctr.getArticulos);

export default router;