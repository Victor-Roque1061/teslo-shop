import { IsNotEmpty, IsString, IsNumber, minLength, IsInt, IsPositive, IsOptional, IsArray, IsIn } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsInt()
    @IsPositive()
    @IsOptional()
    stock?: number;

    @IsString({ each: true })
    @IsArray()
    sizes: string[];

    @IsIn(['XS', 'S', 'M', 'L', 'XL'], { each: true })
    gender: string;

}
