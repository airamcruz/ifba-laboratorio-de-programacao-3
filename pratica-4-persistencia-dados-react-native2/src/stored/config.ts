import { Livro } from "entities/livro.model";
import * as SQLite from "expo-sqlite";
import { DataSourceOptions } from "typeorm";

const configDataSource : DataSourceOptions = {    
    database: 'pratica4lamc.db',
    type: 'expo',
    driver: SQLite,
    entities: [Livro],
    synchronize: true,
}

export default configDataSource;