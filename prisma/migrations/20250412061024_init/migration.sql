-- CreateTable
CREATE TABLE "Region" (
    "id" TEXT NOT NULL,
    "name_uz" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "name_en" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);
