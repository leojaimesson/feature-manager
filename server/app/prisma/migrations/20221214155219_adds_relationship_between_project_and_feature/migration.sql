-- AlterTable
ALTER TABLE `Feature` ADD COLUMN `projectId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Feature` ADD CONSTRAINT `Feature_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
