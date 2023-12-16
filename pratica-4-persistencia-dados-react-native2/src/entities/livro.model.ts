import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Genero, ILivro } from "src/@types/livro"

@Entity()
export class Livro {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    titulo: string

    @Column()
    autor: string

    @Column()
    genero: Genero;

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}