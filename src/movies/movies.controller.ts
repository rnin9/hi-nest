import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ppid } from 'process';

@Controller('movies') // entrypoint 변경으로 routing 초기설정가능
export class MoviesController {

    @Get()
    getAll(): string {
        return 'hi movie'
    }
    
    @Get('/:id') // 이쪽 값과 @Param 값은 동일해야 한다.
    getOne(@Param('id') movieId: string): string{ 
        return `this is ${movieId}`;
    }

    @Post()
    create(@Body() reqBody){
        return `create movie with ${reqBody}`;
    }

    @Delete('/:id')
    remove(@Param('id') movieID:string): string{
        return `delete movie ${movieID}`;
    }

    @Patch(':/id')
    updateOne(@Param('id') movieID:string, @Body() reqBody){    // 값 가져올떄는 @Param @Body로 body 데이터 가져오기 가능.
        return {
         updateMovie: movieID,
         ...reqBody //스프레드 연산자.
        }     
    }
}
