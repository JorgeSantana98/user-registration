import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root123',
            database: 'db_registro',
            autoLoadEntities: true,
            synchronize: false,
        }
    }
}
