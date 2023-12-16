import { Entity, Column } from "typeorm"
import { Genero, ILivro } from "./type";
import { EntityBase } from "../base";

@Entity()
export class Livro extends EntityBase implements ILivro {

    // @PrimaryGeneratedColumn()
    // id!: number

    @Column("text")
    titulo!: string

    @Column("text")
    autor!: string

    @Column("text")
    genero!: Genero;

    // @CreateDateColumn()
    // createdAt!: Date

    // @UpdateDateColumn()
    // updatedAt!: Date
}