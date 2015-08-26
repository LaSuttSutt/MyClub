ALTER TABLE `MyClub`
ADD COLUMN `DefaultEmblem` LONGBLOB NULL;

INSERT INTO `MyClub` (`Id`,`ClubName`, `Emblem`, `DefaultEmblem`) VALUES
('e6a9e9d9-50cb-4ae8-8b06-186eaa66bbfd','Mein Verein', null, null);