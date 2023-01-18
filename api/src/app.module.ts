import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { InventoryModule } from './inventory/inventory.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CatalogModule } from './catalog/catalog.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    UserModule,
    InventoryModule,
    ProductModule,
    OrderModule,
    CatalogModule,
    AuthModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
