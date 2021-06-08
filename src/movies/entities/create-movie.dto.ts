import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDto {    //코드 간결하게 만들어주며, validation을 제공해 줄 수 있다.
    @IsString()
    readonly title: string;
    @IsNumber()
    readonly year: number;
    @IsOptional()
    @IsString({ each: true }) // 각각 검사.
    readonly genres: string[];
}