import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { MovieModule } from './movie/movie.module';

@Module({
    imports: [
        MoviesModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'sql307.main-hosting.eu',
            port: 3306,
            username: 'u600933534_testing',
            password: '26194Larm*',
            database: 'u600933534_testing',
            autoLoadEntities: true,
            synchronize: true,
        }),
        MovieModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
