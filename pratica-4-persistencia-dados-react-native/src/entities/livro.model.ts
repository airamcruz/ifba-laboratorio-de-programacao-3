import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Genero, ILivro } from "src/@types/livro"

// @Entity()
export class Livro implements ILivro {
    // @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    titulo: string;

    // @Column()
    autor: string;

    // @Column()
    genero: Genero;
}