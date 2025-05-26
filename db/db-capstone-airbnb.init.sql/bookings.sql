-- -------------------------------------------------------------
-- TablePlus 6.4.8(608)
--
-- https://tableplus.com/
--
-- Database: db-capstone-airbnb
-- Generation Time: 2025-05-27 00:18:17.7430
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `bookings`;
CREATE TABLE `bookings` (
  `booking_id` int NOT NULL AUTO_INCREMENT,
  `room_id` int NOT NULL,
  `arrival_date` datetime NOT NULL,
  `departure_date` datetime NOT NULL,
  `number_guests` int NOT NULL,
  `user_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`booking_id`),
  KEY `bookings_ibfk_1` (`room_id`),
  KEY `bookings_ibfk_2` (`user_id`),
  CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`room_id`),
  CONSTRAINT `bookings_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `bookings` (`booking_id`, `room_id`, `arrival_date`, `departure_date`, `number_guests`, `user_id`, `created_at`, `updated_at`) VALUES
(11, 6, '2025-05-30 17:00:00', '2025-06-03 17:00:00', 2, 31, '2025-05-26 09:06:12', '2025-05-26 09:06:12'),
(12, 22, '2025-05-28 17:00:00', '2025-06-01 17:00:00', 3, 31, '2025-05-26 09:28:21', '2025-05-26 09:28:21'),
(13, 13, '2025-06-03 17:00:00', '2025-06-06 17:00:00', 2, 31, '2025-05-26 09:32:48', '2025-05-26 09:32:48');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;