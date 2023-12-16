import { Livro } from "src/entities/livro.model";
import { DataSource, EntityTarget, ObjectLiteral } from 'typeorm';
import configDataSource from "./config";


class AppDataSource2 {

    private static _instance: AppDataSource2 | null = null;

    private _dataSource: DataSource;

    private _isConnected: boolean;


    private constructor() {
        this._dataSource = new DataSource(configDataSource);        
    }

    public static getInstance(): AppDataSource2 {
        
        if (AppDataSource2._instance == null) {
            AppDataSource2._instance = new AppDataSource2();
            AppDataSource2._instance.connect();
        }

        return AppDataSource2._instance;
    }

    private async connect() {

        this._dataSource.initialize().then((value) => {
            console.log('_dataSource.initialize().then: ', value)
        })
        .catch((reason) => {
            console.log('_dataSource.initialize().catch: ', reason)
        })
        
        const connected = await this._dataSource.initialize();

        console.log('const connected: ', connected)

    }

    get isConnected() : boolean {
        return this._isConnected; 
    }

}

const AppDataSource = new DataSource(configDataSource)

const dataSourceInitialize = ()  => {
    AppDataSource.initialize()
    .catch((error) => console.log(error))
}

export {
    AppDataSource, AppDataSource2
}