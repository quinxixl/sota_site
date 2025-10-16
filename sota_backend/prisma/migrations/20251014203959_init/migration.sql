-- CreateTable
CREATE TABLE "cases" (
    "id" SERIAL NOT NULL,
    "img_url" TEXT NOT NULL,
    "case_desc" TEXT NOT NULL,

    CONSTRAINT "cases_pkey" PRIMARY KEY ("id")
);
