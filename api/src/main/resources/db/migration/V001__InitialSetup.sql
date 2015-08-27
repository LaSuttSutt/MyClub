CREATE TABLE `User` (
  `Id` CHAR(36) NOT NULL,
  `Name` VARCHAR(100) NOT NULL,
  `ShortName` VARCHAR(10) NOT NULL,
  `Email` VARCHAR(100) NULL,
  `Password` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE INDEX `Name_UNIQUE` (`Name` ASC),
  UNIQUE INDEX `ShortName_UNIQUE` (`ShortName` ASC));

CREATE TABLE `UserRoles` (
  `Id` CHAR(36) NOT NULL,
  `FkUserId` CHAR(36) NOT NULL,
  `Role` INT(11) NOT NULL);

INSERT INTO `User`(`Id`,`Name`,`ShortName`,`Email`,`Password`)
VALUES('0e4f3733-ed72-4e63-bc7d-8f784348b3d7','Administrator','admin','sven.sutter@it-puzzles.de','44047210810420107506624974438055026627');

INSERT INTO `UserRoles`(`Id`, `FkUserId`, `Role`)
VALUES('d7a7145c-6cbc-449f-ae11-aa79abec95da', '0e4f3733-ed72-4e63-bc7d-8f784348b3d7', 0);

CREATE TABLE `Token` (
  `Id` CHAR(36) NOT NULL,
  `FkUserId` CHAR(36) NOT NULL,
  `Created` DATETIME NOT NULL,
  PRIMARY KEY (`Id`)
);

CREATE TABLE `MyClub` (
  `Id` CHAR(36) NOT NULL,
  `ClubName` VARCHAR(250) NOT NULL,
  `Emblem` LONGBLOB NULL,
  PRIMARY KEY (`Id`));

INSERT INTO `MyClub` (`Id`,`ClubName`, `Emblem`) VALUES
  ('e6a9e9d9-50cb-4ae8-8b06-186eaa66bbfd','Mein Verein', null);