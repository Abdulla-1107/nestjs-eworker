-- CreateTable
CREATE TABLE "MasterProfession" (
    "id" TEXT NOT NULL,
    "professionId" TEXT NOT NULL,
    "masterId" TEXT NOT NULL,
    "levelId" TEXT NOT NULL,
    "minWorkingHours" INTEGER NOT NULL,
    "priceHourly" DECIMAL(65,30) NOT NULL,
    "priceDaily" DECIMAL(65,30) NOT NULL,
    "experience" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "MasterProfession_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MasterProfession" ADD CONSTRAINT "MasterProfession_professionId_fkey" FOREIGN KEY ("professionId") REFERENCES "Profession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterProfession" ADD CONSTRAINT "MasterProfession_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "Master"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterProfession" ADD CONSTRAINT "MasterProfession_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
