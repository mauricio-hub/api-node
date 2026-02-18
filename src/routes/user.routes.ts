/**
 * USER ROUTES
 * Define endpoints relacionados con usuarios.
 */


import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();
const userController = new UserController();

router.get("/", userController.getAll.bind(userController));

router.post('/',userController.create.bind(userController))

router.get('/:id', userController.findById.bind(userController))

router.delete('/:id', userController.delete.bind(userController))

router.put('/:id', userController.update.bind(userController))

export default router;
