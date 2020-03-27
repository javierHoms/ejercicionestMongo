import { IsInt, IsString, IsDate } from 'class-validator';
export class BookDto {
    
    @IsInt()
    _id: number;

    @IsString()
    titulo: string;

    @IsString()
    autor: string;

    @IsDate()
    date: Date;

}
