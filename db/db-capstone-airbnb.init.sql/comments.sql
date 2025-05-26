-- -------------------------------------------------------------
-- TablePlus 6.4.8(608)
--
-- https://tableplus.com/
--
-- Database: db-capstone-airbnb
-- Generation Time: 2025-05-27 00:18:45.2710
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `room_id` int NOT NULL,
  `user_id` int NOT NULL,
  `date_comment` datetime DEFAULT CURRENT_TIMESTAMP,
  `content` varchar(255) DEFAULT NULL,
  `star_comment` int DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `comments_ibfk_1` (`room_id`),
  KEY `comments_ibfk_2` (`user_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`room_id`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `comments` (`comment_id`, `room_id`, `user_id`, `date_comment`, `content`, `star_comment`) VALUES
(1, 7, 7, '2025-05-15 15:28:53', 'verry good', 5),
(2, 7, 8, '2025-05-15 15:28:53', 'beatyfull ', 5),
(3, 7, 10, '2025-05-15 15:28:53', 'I am very satisfied', 5),
(4, 7, 9, '2025-05-15 17:46:31', 'Feel satisfied', 4);


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;