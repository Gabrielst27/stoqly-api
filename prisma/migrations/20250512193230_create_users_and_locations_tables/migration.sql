/*
  Warnings:

  - Added the required column `locationId` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'MANAGER', 'OWNER');

-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "name" SET DATA TYPE VARCHAR(64);

-- AlterTable
ALTER TABLE "product_stock_histories" ADD COLUMN     "locationId" UUID;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "locationId" UUID NOT NULL,
ALTER COLUMN "sku" SET DATA TYPE VARCHAR(64),
ALTER COLUMN "barcode" SET DATA TYPE VARCHAR(64),
ALTER COLUMN "name" SET DATA TYPE VARCHAR(64);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "email" VARCHAR(128) NOT NULL,
    "password" VARCHAR(32) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "date_ck" CHECK ("updatedAt" >= "createdAt")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" UUID NOT NULL,
    "zone" VARCHAR(32) NOT NULL,
    "aisle" VARCHAR(64) NOT NULL,
    "shelf" VARCHAR(64) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "zone_aisle_uq" UNIQUE ("zone", "aisle"),
    CONSTRAINT "aisle_shelf_uq" UNIQUE ("aisle", "shelf")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_stock_histories" ADD CONSTRAINT "product_stock_histories_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "locations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
