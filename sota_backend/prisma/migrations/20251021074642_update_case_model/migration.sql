-- CreateTable
CREATE TABLE "cases" (
    "id" SERIAL NOT NULL,
    "logo_url" TEXT NOT NULL,
    "design_url" TEXT NOT NULL,

    CONSTRAINT "cases_pkey" PRIMARY KEY ("id")
);
