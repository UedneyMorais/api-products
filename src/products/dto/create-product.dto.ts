import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  price: number;

  //imagemPath: string;
}
