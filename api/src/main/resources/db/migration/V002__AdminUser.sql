INSERT INTO `User`(`Id`,`Name`,`ShortName`,`Email`,`Password`)
VALUES('0e4f3733-ed72-4e63-bc7d-8f784348b3d7','Administrator','admin','sven.sutter@it-puzzles.de','44047210810420107506624974438055026627');

INSERT INTO `UserRoles`(`Id`, `FkUserId`, `Role`)
VALUES('d7a7145c-6cbc-449f-ae11-aa79abec95da', '0e4f3733-ed72-4e63-bc7d-8f784348b3d7', 0);