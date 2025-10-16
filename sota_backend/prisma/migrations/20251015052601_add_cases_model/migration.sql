/*
  Warnings:

  - Changed the type of `case_desc` on the `cases` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "cases" DROP COLUMN "case_desc",
ADD COLUMN     "case_desc" JSONB NOT NULL;
