/**
 * USER REPOSITORY
 * Interactúa directamente con PostgreSQL.
 * Ejecuta queries SQL.
 */

import { pool } from "../config/database";
import { User } from "../types/user.types";


export class UserRepository {
    async findAll(): Promise<User[]> {
        const result = await pool.query('SELECT * FROM users');
        return result.rows;
    }

    async create(user: User): Promise<User> {
        const query = 'INSERT INTO users (name , email) VALUES ($1,$2) RETURNING *';
        const values = [user.name, user.email];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    async findById(id: number): Promise<User | null> {
        const query = 'SELECT * FROM users WHERE id = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0] || null;
    }

    async delete(id: number): Promise<void> {
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
    }


    async update(id: number, user: User): Promise<User | null> {
        const query = `
    UPDATE users
    SET name = $1, email = $2
    WHERE id = $3
    RETURNING *
  `
        const values = [user.name, user.email, id]

        const result = await pool.query(query, values)
        return result.rows[0] || null
    }



}