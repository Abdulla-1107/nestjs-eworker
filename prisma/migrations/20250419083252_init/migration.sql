-- DropForeignKey
ALTER TABLE "MasterProfession" DROP CONSTRAINT "MasterProfession_professionId_fkey";

-- AddForeignKey
ALTER TABLE "MasterProfession" ADD CONSTRAINT "MasterProfession_professionId_fkey" FOREIGN KEY ("professionId") REFERENCES "Profession"("id") ON DELETE CASCADE ON UPDATE CASCADE;
