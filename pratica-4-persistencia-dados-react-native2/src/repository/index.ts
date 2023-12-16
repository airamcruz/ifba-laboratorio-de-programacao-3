import { EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { AppDataSource } from "stored/index";

    // const userRepository = MyDataSource.getRepository(User)

    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await userRepository.save(user)

    // const allUsers = await userRepository.find()
    // const firstUser = await userRepository.findOneBy({
    //     id: 1,
    // }) // find by id
    // const timber = await userRepository.findOneBy({
    //     firstName: "Timber",
    //     lastName: "Saw",
    // }) // find by firstName and lastName

    // await userRepository.remove(timber)


export class EntityRepository<T extends ObjectLiteral> {

    private _dbRepository: Repository<T>;

    private _entity: EntityTarget<T>;

    constructor() {
        this._dbRepository = AppDataSource.getRepository(this._entity)
    }

    async create(entity: T) {
        const result = await this._dbRepository.save(entity); 
    }

    async update(entity: T) {
        const result = await this._dbRepository.save(entity); 
    }

    async delete(entity: T) {
        const result = await this._dbRepository.remove(entity)
    }

    // async find(param: {}): Promise<T[]> {
    //     const whereQuery:
    //     const entity = await this._dbRepository.findOneBy({
            
    //     } as T)
    //     return entity;
    // }

    async findAll(): Promise<T[]> {
        const items = await this._dbRepository.find();
        return items;
    }



    // Adicione outras funções necessárias aqui
}