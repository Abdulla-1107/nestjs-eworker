/*
  Warnings:

  - You are about to drop the column `account` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `bank` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `inn` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `mfo` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `salary` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "account",
DROP COLUMN "address",
DROP COLUMN "bank",
DROP COLUMN "inn",
DROP COLUMN "mfo",
DROP COLUMN "salary";
