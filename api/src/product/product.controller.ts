import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getProducts() {
    return 'All Products';
  }

  @Post()
  createProduct() {
    return 'Product Created';
  }

  @Put()
  updateProduct() {
    return 'Product Updated';
  }

  @Delete()
  deleteProduct() {
    return 'Product deleted';
  }
}
