/*
  Warnings:

  - The primary key for the `GeneralInfo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `GeneralInfo` table. All the data in the column will be lost.
  - The `id` column on the `GeneralInfo` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "GeneralInfo" DROP CONSTRAINT "GeneralInfo_pkey",
DROP COLUMN "createdAt",
ADD COLUMN     "regionId" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "GeneralInfo_pkey" PRIMARY KEY ("id");
