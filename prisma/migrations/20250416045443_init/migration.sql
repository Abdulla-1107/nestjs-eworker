-- CreateTable
CREATE TABLE "OrderMaster" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "masterId" TEXT NOT NULL,

    CONSTRAINT "OrderMaster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Basket" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "professionId" TEXT NOT NULL,
    "toolId" TEXT NOT NULL,
    "levelId" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "workingTime" INTEGER NOT NULL,
    "totalPrice" DECIMAL(65,30) NOT NULL,
    "timeUnit" TEXT NOT NULL,

    CONSTRAINT "Basket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orderProduct" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "professionId" TEXT NOT NULL,
    "toolId" TEXT NOT NULL,
    "levelId" TEXT NOT NULL,
    "workingTime" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "count" INTEGER NOT NULL,
    "timeUnit" TEXT NOT NULL,

    CONSTRAINT "orderProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderMaster" ADD CONSTRAINT "OrderMaster_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderMaster" ADD CONSTRAINT "OrderMaster_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "Master"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_professionId_fkey" FOREIGN KEY ("professionId") REFERENCES "Profession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderProduct" ADD CONSTRAINT "orderProduct_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderProduct" ADD CONSTRAINT "orderProduct_professionId_fkey" FOREIGN KEY ("professionId") REFERENCES "Profession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderProduct" ADD CONSTRAINT "orderProduct_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderProduct" ADD CONSTRAINT "orderProduct_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
