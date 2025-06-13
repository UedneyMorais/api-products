/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  UseInterceptors,
  UploadedFile,
  Delete,
  Patch,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductsService } from '../service/products.service';
import { BadRequestException } from '../../common/exceptions/bad-request.exception';
import { Product } from '../entities/product.entity';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @Post()
  // @UseInterceptors(FileInterceptor('image'))
  // @ApiConsumes('multipart/form-data')
  // @ApiBody({
  //   description: 'Criar um novo produto com imagem',
  //   type: CreateProductDto,
  // })
  // create(
  //   @Body() createProductDto: CreateProductDto,
  //   @UploadedFile() image: Express.Multer.File,
  // ) {
  //   if (!image) {
  //     throw new BadRequestException('Imagem é obrigatória');
  //   }

  //   return this.productsService.create(createProductDto, image.path);
  // }

  // @Post()
  // @ApiBody({
  //   description: 'Criar um novo produto com imagem',
  //   type: CreateProductDto,
  // })
  // create(
  //   @Body() createProductDto: CreateProductDto,
  //   // @UploadedFile() image: Express.Multer.File,
  // ) {
  //   // if (!image) {
  //   //   throw new BadRequestException('Imagem é obrigatória');
  //   // }

  //   return this.productsService.create(createProductDto);
  // }

  @Post()
  @UseInterceptors(FileInterceptor('image', { dest: './uploads' }))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        description: { type: 'string' },
        price: { type: 'number' },
        image: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<Product> {
    if (!image) throw new BadRequestException('Imagem é obrigatória');
    return this.productsService.create(createProductDto, image);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
