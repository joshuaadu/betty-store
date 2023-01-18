-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MANAGER', 'USER');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "telephone" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "attributes" JSONB NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" TIMESTAMP(3) NOT NULL,
    "discontinued" BOOLEAN NOT NULL,
    "images" JSONB[],
    "meta_title" TEXT NOT NULL,
    "meta_keywords" TEXT NOT NULL,
    "meta_description" TEXT NOT NULL,
    "quantity_min" INTEGER NOT NULL,
    "quantity_inc" INTEGER NOT NULL,
    "sku" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "stock" TEXT[],
    "stock_backorder" BOOLEAN NOT NULL,
    "stock_level" INTEGER NOT NULL,
    "stock_preorder" BOOLEAN NOT NULL,
    "stock_status" TEXT NOT NULL,
    "stock_tracking" BOOLEAN NOT NULL,
    "summary" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "variable" BOOLEAN NOT NULL,
    "variants" TEXT[],

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "productId" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "caption" TEXT NOT NULL,
    "fileId" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "data" BYTEA NOT NULL,
    "content_type" TEXT NOT NULL,
    "date_uploaded" TIMESTAMP(3) NOT NULL,
    "height" INTEGER NOT NULL,
    "length" INTEGER NOT NULL,
    "metadata" JSONB NOT NULL,
    "md5" TEXT NOT NULL,
    "private" BOOLEAN NOT NULL,
    "url" TEXT NOT NULL,
    "width" INTEGER NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_telephone_key" ON "User"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_password_key" ON "User"("username", "password");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
