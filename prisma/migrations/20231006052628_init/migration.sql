/*
  Warnings:

  - Added the required column `isFeatured` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `newArrival` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `isFeatured` BOOLEAN NOT NULL,
    ADD COLUMN `newArrival` BOOLEAN NOT NULL;
