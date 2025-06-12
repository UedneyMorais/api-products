import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import slugify from 'slugify';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(
    createProductDto: CreateProductDto,
    imagePath: string,
  ): Promise<Product> {
    const slug = slugify(createProductDto.name, { lower: true });
    const product = this.productRepository.create({
      ...createProductDto,
      imagePath,
      slug,
    });
    return this.productRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });

    return product!;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(id);
    if (!product) {
      throw new NotFoundException('');
    }
    await this.productRepository.update(id, updateProductDto);
    return product;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
