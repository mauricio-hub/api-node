/**
 * USER SERVICE
 * Contiene la lógica de negocio.
 * No conoce Express.
 */

import { UserRepository } from "../repositories/user.repositories";
import { User } from "../types/user.types";

export class UserService {
    private userRepository: UserRepository;

    constructor(){
        this.userRepository = new UserRepository();

    }

    async getAllUsers(): Promise<User[]> {
        return await this.userRepository.findAll();
    }

    async createUser(user:User): Promise<User>{
        return await this.userRepository.create(user);
    }

    async getUserById(id:number): Promise<User | null> {
        return await this.userRepository.findById(id);
    }

    async deleteUser(id:number): Promise<void>{
        await this.userRepository.delete(id);
    }

    async updateUser(id:number, user:User):Promise<User | null>{
        return await this.userRepository.update(id,user)
    }
}