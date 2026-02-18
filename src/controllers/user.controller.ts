/**
 * USER CONTROLLER
 * Maneja req/res.
 * Usa try/catch.
 * Llama al service.
 */

import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export class UserController {
    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const users = await userService.getAllUsers();
            console.log("users: ", users)
            return res.status(200).json({
                success: true,
                data: users
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: "Error al obtener usuarios"
            })
        }
    }

    async create(req: Request, res: Response) {
        try {
            const user = await userService.createUser(req.body)
            res.status(201).json(user)
        } catch (error) {
            res.status(500).json({ message: 'Error creating user' })
        }
    }

  
    async findById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const user = await userService.getUserById(id)
            if (!user) {
                return res.status(404).json({ message: 'User not found' })
            }
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({ message: 'Error fetching user' })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            await userService.deleteUser(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).json({ message: 'Error deleting user' })
        }
    }


    async update(req: Request, res:Response){
        try{
            const id = Number(req.params.id)
            const updateUser = await userService.updateUser(id, req.body)

            if(!updateUser){
                return res.status(404).json({ message: 'User not found' })
            }
            

            res.status(200).json(updateUser)


        }catch(error){
                res.status(500).json({ message: 'Error updating user' })
        }
    }


}