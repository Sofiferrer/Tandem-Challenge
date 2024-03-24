import productController from "../controllers/personController";
import { Router } from "express";

const productRouter = Router();

// Rutas
productRouter.get("/", productController.getPerson);
// productRouter.post("/", );
// productRouter.put("/:id", );
// productRouter.delete("/:id", );

export default productRouter;
