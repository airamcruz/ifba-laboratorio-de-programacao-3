import { Livro } from "../entities/Livro";
import { EntityRepository } from "../repository/base";
import { TPayloadCreateLivro, TPayloadUpdateLivro } from "../states/livro/reducer/types";

export class LivroService {
    private _repository: EntityRepository<Livro>;

    constructor() {
        this._repository = new EntityRepository<Livro>();
    }

    async create(item: TPayloadCreateLivro) {
        const livro = new Livro();
        livro.titulo = item.titulo;
        livro.autor = item.autor;
        livro.genero = item.genero;

        const result = this._repository.create(livro);

        return result;
    }

    async update(item: TPayloadUpdateLivro) {
        const livro = await this._repository.findById(item.id);
        
        if(livro == null) {
            throw new Error('N')
        }

        livro.titulo = item.titulo;
        livro.autor = item.autor;
        livro.genero = item.genero;

        const result = this._repository.update(livro);

        return result;
    }

    async delete(id: number) {
        const livro = await this.findById(id);

        this._repository.delete(livro);
    }

    async findById(id: number) {
        const livro = await this._repository.findById(id);
        
        if(livro == null) {
            throw new Error('N')
        }

        return livro;
    }

    async findAll() {
    }
}