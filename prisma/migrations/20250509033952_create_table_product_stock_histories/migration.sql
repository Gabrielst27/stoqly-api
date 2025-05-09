-- CreateEnum
CREATE TYPE "TransferReasons" AS ENUM ('SALE', 'PURCHASE', 'TRANSFER', 'ADJUSTMENT');

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "minStock" DROP NOT NULL,
ALTER COLUMN "maxStock" DROP NOT NULL;

-- CreateTable
CREATE TABLE "product_stock_histories" (
    "id" UUID NOT NULL,
    "productId" UUID NOT NULL,
    "stock" INTEGER NOT NULL,
    "reason" "TransferReasons" NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),

    CONSTRAINT "product_stock_histories_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX one_open_history_per_product
  ON "product_stock_histories"("productId")
  WHERE "endDate" IS NULL;

-- AddForeignKey
ALTER TABLE "product_stock_histories" ADD CONSTRAINT "product_stock_histories_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
