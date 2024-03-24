import personController from "../controllers/personController";
import { Router } from "express";

const personRouter = Router();

// Rutas
personRouter.get("/", personController.getPerson);
// personRouter.post("/", );
// personRouter.put("/:id", );
// personRouter.delete("/:id", );

export default personRouter;
