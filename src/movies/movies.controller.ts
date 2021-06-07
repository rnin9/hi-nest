import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './entities/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // entrypoint 변경으로 routing 초기설정가능
export class MoviesController {
    constructor(readonly MoviesService: MoviesService) { }
    @Get()
    getAll(): Movie[] {
        return this.MoviesService.getAll();
    }
    @Get('search')
    search(@Query("name") movieID) {         // url resources 가져오기 = @Query
        return `I'm searching ${movieID}`;
    }

    @Get(':id') // 이쪽 값과 @Param 값은 동일해야 한다.
    getOne(@Param('id') movieID: number): Movie {
        console.log(typeof movieID);
        return this.MoviesService.getOne(movieID);
    }

    @Post()
    create(@Body() reqBody: CreateMovieDto) {
        return this.MoviesService.create(reqBody);
    }

    @Delete('/:id')
    remove(@Param('id') movieID: number) {
        return this.MoviesService.deleteOne(movieID);
    }

    @Patch(':/id')
    updateOne(@Param('id') movieID: number, @Body() reqBody) {    // 값 가져올떄는 @Param @Body로 body 데이터 가져오기 가능.
        return {
            updateMovie: movieID,
            ...reqBody //스프레드 연산자.
        }
    }


}
