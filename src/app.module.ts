import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseConfig, databaseConfig } from './config';

const NODE_ENV = process.env.NODE_ENV || 'development';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        `.env.${NODE_ENV}.local`,
        `.env.${NODE_ENV}`,
        '.env.local',
        '.env',
      ],
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      useFactory(config: ConfigService) {
        return {
          type: 'mysql',
          ...config.get<DatabaseConfig>('database'),
          synchronize: true,
        };
      },
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
