-- CreateTable
CREATE TABLE "professionTool" (
    "id" TEXT NOT NULL,
    "professionId" TEXT NOT NULL,
    "toolId" TEXT NOT NULL,

    CONSTRAINT "professionTool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professionLevel" (
    "id" TEXT NOT NULL,
    "professionId" TEXT NOT NULL,
    "levelId" TEXT NOT NULL,
    "minWorkingHours" INTEGER NOT NULL,
    "priceHourly" DECIMAL(65,30) NOT NULL,
    "priceDaily" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "professionLevel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "professionTool" ADD CONSTRAINT "professionTool_professionId_fkey" FOREIGN KEY ("professionId") REFERENCES "Profession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professionTool" ADD CONSTRAINT "professionTool_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professionLevel" ADD CONSTRAINT "professionLevel_professionId_fkey" FOREIGN KEY ("professionId") REFERENCES "Profession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professionLevel" ADD CONSTRAINT "professionLevel_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
