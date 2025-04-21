-- DropForeignKey
ALTER TABLE "orderProduct" DROP CONSTRAINT "orderProduct_levelId_fkey";

-- DropForeignKey
ALTER TABLE "orderProduct" DROP CONSTRAINT "orderProduct_toolId_fkey";

-- AlterTable
ALTER TABLE "orderProduct" ALTER COLUMN "professionId" DROP NOT NULL,
ALTER COLUMN "toolId" DROP NOT NULL,
ALTER COLUMN "levelId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "orderProduct" ADD CONSTRAINT "orderProduct_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderProduct" ADD CONSTRAINT "orderProduct_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE SET NULL ON UPDATE CASCADE;
