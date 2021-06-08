import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movie.dto";

export class UpdateMovieDto extends PartialType(CreateMovieDto){    //코드 간결하게 만들어주며, validation을 제공해 줄 수 있다.

}