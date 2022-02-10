use wild;
CREATE TABLE album(
`id` INT PRIMARY KEY AUTO_INCREMENT,
`title` VARCHAR(255) NOT NULL,
`genre` VARCHAR(255),
`picture` VARCHAR(255),
`artist` VARCHAR(255)
);

select * from track;
CREATE TABLE track(
`id` INT PRIMARY KEY AUTO_INCREMENT,
`title` VARCHAR(128) NOT NULL,
`youtube_url` VARCHAR(255) NOT NULL,
`id_album` INT
);

INSERT INTO album(title, genre, picture, artist) VALUES("Indestructible", "metal", "https://en.wikipedia.org/wiki/Indestructible_(Disturbed_album)#/media/File:Indestructible_(Disturbed_album)_cover.jpg", "Disturbed");

INSERT INTO track(title, youtube_url, id_album) VALUES("Indestructible", "https://www.youtube.com/watch?v=aWxBrI0g1kE", 1);

