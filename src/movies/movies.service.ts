import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './entities/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { UpdateMovieDto } from './entities/update.movie.dto';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[]{
        return this.movies;
    }

    getOne(id: number):Movie{
        return this.movies.find(movie => movie.id === id);
    }

    deleteOne(id: number): boolean{
        this.movies = this.movies.filter(movie => movie.id !== id)
        return true;
    }

    create(movieData: CreateMovieDto){
        const len = this.movies.length;
        if (len === 0){
            this.movies.push({
                id: len+1,
                ...movieData
            })
        } else{
            this.movies.push({
                id: this.movies[len-1].id+1,
                ...movieData
            })
        }
    }

    update(id:number,movieData:UpdateMovieDto){
        const movie = this.getOne(id);
       this.movies.splice(id-1,1,{...movie, ...movieData})
    }
}
