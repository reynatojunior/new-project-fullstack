import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Produto } from './produtos/entities/produto.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USER'), // Note que no .env é DB_USER não DB_USERNAME
        password: configService.get('DB_PASS'), // Note que no .env é DB_PASS não DB_PASSWORD
        database: configService.get('DB_NAME'), // Note que no .env é DB_NAME não DB_DATABASE
        entities: [Produto],
        synchronize: configService.get('NODE_ENV') === 'development', // Sincroniza apenas em desenvolvimento
      }),
    }),
    ProdutosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}