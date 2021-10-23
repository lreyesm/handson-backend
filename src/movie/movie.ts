import { Column, Entity, IsNull, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity('movie')
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: null })
    budget: string;

    @Column({ default: null })
    originalLang: string;

    @Column({ default: null })
    originalTitle: string;

    @Column({ default: null })
    overview: string;

    @Column({ default: null })
    popularity: string;

    @Column({ default: null })
    releaseDate: string;

    @Column({ default: null })
    revenue: string;

    @Column({ default: null })
    runtime: string;

    @Column({ default: null })
    status: string;

    @Column({ default: null })
    tagline?: string;

    @IsNotEmpty()
    @Column({ default: null })
    title: string;

    @Column({ default: null })
    voteAverage: string;

    @Column({ default: null })
    voteCount: number;

    @Column({ default: null })
    createdAt: string;

    @Column({ default: null })
    updatedAt?: string | null;

    @Column({ default: null })
    deletedAt?: string | null;
}
