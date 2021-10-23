import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { Movie } from './movie';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Movie])],
    providers: [MovieService],
    controllers: [MovieController],
    exports: [MovieService],
})
export class MovieModule {}
