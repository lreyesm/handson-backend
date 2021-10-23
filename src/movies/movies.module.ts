import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MovieModule } from '../movie/movie.module';

@Module({
    imports: [MovieModule],
    controllers: [MoviesController],
    providers: [MoviesService],
})
export class MoviesModule {}
