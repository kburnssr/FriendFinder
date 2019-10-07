/*
-- Query: SELECT * FROM friends.questions
LIMIT 0, 1000

-- Date: 2019-10-06 16:54
*/
INSERT INTO `questions` (`id`,`question`) VALUES (1,'You like brussel sprouts');
INSERT INTO `questions` (`id`,`question`) VALUES (2,'You like to swim');
INSERT INTO `questions` (`id`,`question`) VALUES (3,'You like to run');
INSERT INTO `questions` (`id`,`question`) VALUES (4,'You like to bike');
INSERT INTO `questions` (`id`,`question`) VALUES (5,'You like to drink beer');
INSERT INTO `questions` (`id`,`question`) VALUES (6,'You like to smoke pot');
INSERT INTO `questions` (`id`,`question`) VALUES (7,'You like sitcoms');
INSERT INTO `questions` (`id`,`question`) VALUES (8,'You like documentaries');
INSERT INTO `questions` (`id`,`question`) VALUES (9,'You like opera');
INSERT INTO `questions` (`id`,`question`) VALUES (10,'You like football');

INSERT INTO `friends`.`friends` (`name`, `picture_link`) VALUES ('Kevin Burns', 'https://lh3.googleusercontent.com/-pOFQsJzDrkg/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf1exRTlSFu-HkZIWfEpIW9Cj8Pdg.CMID/s64-c/photo.jpg');

/*
-- Query: SELECT * FROM friends.scores
LIMIT 0, 1000

-- Date: 2019-10-06 17:12
*/
INSERT INTO `scores` (`id`,`question_id`,`friend_id`,`score`) VALUES (1,1,1,5);
INSERT INTO `scores` (`id`,`question_id`,`friend_id`,`score`) VALUES (2,2,1,2);
INSERT INTO `scores` (`id`,`question_id`,`friend_id`,`score`) VALUES (3,3,1,4);
INSERT INTO `scores` (`id`,`question_id`,`friend_id`,`score`) VALUES (4,4,1,4);
INSERT INTO `scores` (`id`,`question_id`,`friend_id`,`score`) VALUES (5,5,1,3);
INSERT INTO `scores` (`id`,`question_id`,`friend_id`,`score`) VALUES (6,6,1,1);
INSERT INTO `scores` (`id`,`question_id`,`friend_id`,`score`) VALUES (7,7,1,1);
INSERT INTO `scores` (`id`,`question_id`,`friend_id`,`score`) VALUES (8,8,1,5);
INSERT INTO `scores` (`id`,`question_id`,`friend_id`,`score`) VALUES (9,9,1,3);
INSERT INTO `scores` (`id`,`question_id`,`friend_id`,`score`) VALUES (10,10,1,1);
