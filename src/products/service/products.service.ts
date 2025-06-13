import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import slugify from 'slugify';
import { InternalServerError } from '../../common/exceptions/internal-server-error.exception';
import { NotFoundException } from '../../common/exceptions/not-found.exception';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(
    createProductDto: CreateProductDto,
    image: Express.Multer.File,
  ): Promise<Product> {
    const slug = slugify(createProductDto.name, { lower: true });

    const imagePath = `/uploads/${image.filename}`;

    const product = this.productRepository.create({
      ...createProductDto,
      imagePath,
      slug,
    });

    if (!product) {
      throw new InternalServerError();
    }

    return this.productRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException();
    }

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const productFound = await this.findOne(id);
    if (!productFound) {
      throw new NotFoundException();
    }
    const updatedProduct = await this.productRepository.update(
      id,
      updateProductDto,
    );
    return updatedProduct;
  }

  async remove(id: number) {
    const productFound = await this.findOne(id);
    if (!productFound) {
      throw new NotFoundException();
    }
    return this.productRepository.delete(id);
  }
}
