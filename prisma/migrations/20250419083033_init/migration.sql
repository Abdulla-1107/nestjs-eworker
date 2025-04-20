-- DropForeignKey
ALTER TABLE "MasterProfession" DROP CONSTRAINT "MasterProfession_masterId_fkey";

-- AddForeignKey
ALTER TABLE "MasterProfession" ADD CONSTRAINT "MasterProfession_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "Master"("id") ON DELETE CASCADE ON UPDATE CASCADE;
