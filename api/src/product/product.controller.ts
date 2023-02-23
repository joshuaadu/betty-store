import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
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

  @Patch()
  updateProduct() {
    return 'Product Updated';
  }

  @Put()
  replaceProduct() {
    return 'Product Updated';
  }

  @Delete()
  deleteProduct() {
    return 'Product deleted';
  }
}
