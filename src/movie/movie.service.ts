import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Movie } from './movie';

@Injectable()
export class MovieService {
    constructor(@InjectRepository(Movie) private readonly movieRepository: Repository<Movie>) {}

    async save(options: any) {
        return this.movieRepository.save(options);
    }
    async update(id: string, options: any) {
        return this.movieRepository.update(id, options);
    }
    async delete(id: string) {
        return this.movieRepository.delete(id);
    }
    async findOne(options: any) {
        return this.movieRepository.findOne(options);
    }
    async findAll(query: any) {
        let take = query.limit || 100;
        let skip = query.offset || 0;
        const page = query.page;
        if (page) {
            skip = (page - 1) * take;
        }
        // const keyword = query.keyword || ''

        return await this.movieRepository.find({
            // where: { title: Like('%' + keyword + '%') }, order: { title: "DESC" },
            take: take,
            skip: skip,
        });
    }
}
