-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'SUPER_ADMIN', 'VIEWER_ADMIN', 'USER_FIZ', 'USER_YUR');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "inn" TEXT,
    "bank" TEXT,
    "mfo" TEXT,
    "salary" DOUBLE PRECISION,
    "account" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "regionId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
