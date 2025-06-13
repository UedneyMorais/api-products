import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // faz o ConfigModule ser global
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    ProductsModule,
    ServeStaticModule.forRoot({
      // `rootPath` aponta para onde a pasta 'uploads' está fisicamente no seu servidor.
      // `join(__dirname, '..', 'uploads')` resolve para a pasta 'uploads' na raiz do seu projeto NestJS.
      rootPath: join(__dirname, '..', 'uploads'),
      // `serveRoot` define o prefixo da URL que será usado para acessar esses arquivos.
      // Ou seja, se a imagem está em /uploads/minha-imagem.png, ela será acessível via http://localhost:3000/uploads/minha-imagem.png
      serveRoot: '/uploads/',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
