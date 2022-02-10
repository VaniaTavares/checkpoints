/* create database checkpoint; */
--
DROP TABLE IF EXISTS `track`;
--
CREATE TABLE `track` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `youtube_url` varchar(255) NOT NULL,
  `id_album` int
);
--
DROP TABLE IF EXISTS `album`;
--
CREATE TABLE `album` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `genre` varchar(255),
  `picture` varchar(255),
  `artist` varchar(255)
);
--
ALTER TABLE `track`
ADD FOREIGN KEY (`id_album`) REFERENCES `album` (`id`);
--
INSERT INTO `album` (`title`, `genre`, `picture`, `artist`)
VALUES ("ALBUM 1", "rock", "#url_picture", "John Doe");
--
INSERT INTO `track` (`title`, `youtube_url`, `id_album`)
VALUES ("TRACK 1", "#url", 1);
--
select *
from `track` t,
  `album` a
where a.id = t.id_album;