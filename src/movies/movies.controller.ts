import {
    Headers,
    Body,
    Query,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { Movie } from 'src/movie/movie';
import { MovieService } from '../movie/movie.service';

@Controller('movies')
export class MoviesController {
    constructor(private movieService: MovieService) {}

    @Get()
    async getMovies(@Query() query: any, @Body() body: any) {
        const options = query.page ? query : body;
        const res = await this.movieService.findAll(options);
        const answer = {
            res: res,
            count: res.length,
            query: query,
            body: body,
        };
        return answer;
    }

    // @Get('upload')
    // async uploadAllMovies() {
    //     const movies = [];
    //     for (let movie of movies) {
    //         await this.movieService.save(movie);
    //     }
    //     return {
    //         message: 'Movies inserted',
    //         count: movies.length,
    //     };
    // }

    @Post()
    addMovie(@Body() body: Movie) {
        const date = new Date();
        const timeString = date.toISOString();
        return this.movieService.save({
            ...body,
            createdAt: timeString,
        });
    }

    @Get(':movieId')
    async getMovie(@Param() params: any) {
        const movie = await this.movieService.findOne({ id: params.movieId });
        if (!movie) {
            throw new NotFoundException('Movie not found');
        }
        return movie;
    }

    @Put(':movieId')
    async updateMovie(@Body() body: Movie, @Param() params: any) {
        // delete body.id;
        const res = await this.movieService.update(params.movieId, body);
        const movie = await this.movieService.findOne({ id: params.movieId });
        if (!movie) {
            throw new NotFoundException('Movie not found');
        }
        if (res.affected > 0) {
            return movie;
        }
        return {
            message: 'Movie not updated',
            error: 'Not updated',
        };
    }

    @Delete(':movieId')
    async deleteMovie(@Param() params: any) {
        const movie = await this.movieService.findOne({ id: params.movieId });
        if (!movie) {
            throw new NotFoundException('Movie not found');
        }
        const res = await this.movieService.delete(params.movieId);
        if (res.affected > 0) {
            return movie;
        }
        return {
            message: 'Movie not deleted',
            error: 'Not deleted',
        };
    }
}
