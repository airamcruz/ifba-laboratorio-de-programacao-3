import { EntityTarget, FindOptionsWhere, ObjectLiteral, Repository } from "typeorm";
import { AppDataSource } from "../stored/db";

export class EntityRepository<T extends ObjectLiteral> {

    private _dbRepository: Repository<T>;

    private _entity!: EntityTarget<T>;

    constructor() {
        this._dbRepository = AppDataSource.getRepository(this._entity);
    }

    async create(entity: T) {
        const result = await this._dbRepository.save(entity);

        console.log('====================================');
        console.log('create : ', result);
        console.log('====================================');

        return result;
    }

    async update(entity: T) {
        const result = await this._dbRepository.save(entity);
        
        console.log('====================================');
        console.log('update : ', result);
        console.log('====================================');

        return result;
    }

    async delete(entity: T) {
        const result = await this._dbRepository.remove(entity)
        
        console.log('====================================');
        console.log('delete : ', result);
        console.log('====================================');

        return result;
    }

    async findById(id: number) {
        const options: IEntityBase = {
            id : id
        }

        const entity = await this._dbRepository.findOneBy(options as any)

        return entity;
    }

    async findAll() {
        const items = await this._dbRepository.find();

        return items;
    }

    async findBy(options: any) {
        const entities = await this._dbRepository.findBy(options)

        return entities;
    }
}