import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { InventoryModule } from './inventory/inventory.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CatalogModule } from './catalog/catalog.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, InventoryModule, ProductModule, OrderModule, CatalogModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
