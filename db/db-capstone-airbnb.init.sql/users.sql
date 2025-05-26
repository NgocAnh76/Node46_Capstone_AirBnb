-- -------------------------------------------------------------
-- TablePlus 6.4.8(608)
--
-- https://tableplus.com/
--
-- Database: db-capstone-airbnb
-- Generation Time: 2025-05-27 00:20:53.4510
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass_word` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `birth_day` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `google_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `face_app_id` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `role_id` int NOT NULL DEFAULT '2',
  `refresh_token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `users` (`user_id`, `full_name`, `email`, `pass_word`, `phone`, `birth_day`, `gender`, `created_at`, `updated_at`, `google_id`, `face_app_id`, `avatar`, `role_id`, `refresh_token`) VALUES
(7, 'nguyen van a', 'vana@gmail.com', '$2b$10$uQWvw89KCuyQHzoq3CYviO97ggPynmu2JrwcpLOlhTkKo5PudhmiO', '0987654321', '01-01-01', 'male', '2025-03-25 10:18:51', '2025-05-18 09:51:00', NULL, NULL, 'string', 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcsImlhdCI6MTc0MzE2Nzk3OCwiZXhwIjoxNzQzNzcyNzc4fQ.B3USzoYii9vaLTlcYk_aaSEhbXaN703MxSENqUZxcfA'),
(8, 'nguyen van b', 'vanb@gmail.com', '$2b$10$CRamgrrcnkd4IR/fTb4eguAbHxQS7WRE9R2k3rtCMYrycEJU7hkLq', '0987654321', '00-00-2000', 'female', '2025-03-25 10:19:37', '2025-05-19 19:46:21', NULL, NULL, '', 2, NULL),
(9, 'nguyen van c', 'vanc@gmail.com', '$2b$10$ig2y/XMPsHjiRbHoRpgfMOQaUhnfmu4KEFM12GsxHmIlIzao5lZ36', '0987654321', '00-00-2000', 'male', '2025-03-25 10:19:51', '2025-05-19 20:20:00', NULL, NULL, NULL, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksImlhdCI6MTc0NzY4NjAwMCwiZXhwIjoxNzQ4MjkwODAwfQ.MN1igJVdUuHixe6JQuNC4s6AqtWOtVsmlWzo8MMzTz8'),
(10, 'nguyen van d', 'vand@gmail.com', '$2b$10$L2dJBR0iIjMzDOh3vN8d5e4.UTE7DZCb2ny1ExX.1Qu2eT3NDcORe', '0987654321', '00-00-2000', 'male', '2025-03-25 10:20:06', '2025-03-25 10:20:06', NULL, NULL, NULL, 2, NULL),
(11, 'nguyen van e', 'vane@gmail.com', '$2b$10$RtcrxWjcmnAL03kTOjTIwueyWbggAgZkuwKmf/cVPf60OtJSo2e7m', '0987654321', '00-00-2000', 'male', '2025-03-25 10:20:19', '2025-03-25 10:20:19', NULL, NULL, NULL, 2, NULL),
(12, 'nguyen van h', 'vanh@gmail.com', '$2b$10$VSjo6i5utgM5zBvsa0WaK.eyrrweeo42U6zFLpobCIUqBfDlvqasC', '0987654321', '00-00-2000', 'male', '2025-03-25 10:20:36', '2025-03-25 10:20:36', NULL, NULL, NULL, 2, NULL),
(17, 'nguyen van test', 'test@gmail.com', '$2b$10$FSWdvf/aEvHoV9cMCUGOrOAiD5RV2BHkJWN43hPHmJY6sYl71RTx6', '098765432', '01-01-01', 'male', '2025-03-27 07:00:05', '2025-03-27 07:00:39', NULL, NULL, NULL, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE3LCJpYXQiOjE3NDMwNTg4MzksImV4cCI6MTc0MzY2MzYzOX0.geNc7QnR6WnGC85ZJvtDqrR_jOE7ImG3n5AC-IK_798'),
(19, 'update user', 'new@gmail.com', '$2b$20$G5Lb2Bh8W5Pc7Y5wo0FKheOw.UfLnvhu8mgelAtdKlWQ1r.PNRLhu', '098765432', '01-01-01', 'string', '2025-03-27 07:16:36', '2025-03-27 07:18:20', NULL, NULL, 'string', 1, NULL),
(22, 'nguyen van a', 'nguyenvana@gmail.com', '$2b$10$1mr7fTxOLYC6RgSHeT.FvemJoNoCS6yaJ634sEOt4a/lHm5GDGtY.', '0123456789', '12-01-2001', 'male', '2025-05-17 18:26:15', '2025-05-18 07:29:19', NULL, NULL, 'https://res.cloudinary.com/nguyenngocanh/image/upload/v1743059506/images/hpyjykacytrxnvglly7f.jpg', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIyLCJpYXQiOjE3NDc1NTIxODgsImV4cCI6MTc0ODE1Njk4OH0.wwugHIRGL_b4vWzM4ZJsz9WmLFQpQq7QysSKaCvZ_MU'),
(24, 'ngocanh', 'ngocanh@gmail.com', '$2b$10$8P00bPAzOms9KidKXFfyEujM/4E9slWk1UU578ceikj0EdmYoOCxa', '0123456789', '01-01-01', 'male', '2025-05-19 20:07:20', '2025-05-26 14:23:29', NULL, NULL, NULL, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJpYXQiOjE3NDgyNjk0MDksImV4cCI6MTc0ODg3NDIwOX0.vX92ADTkht0lCcJAXti8KIU2XsISKD_BKcLbJngaylA'),
(25, 'admin', 'admin@gmail.com', '$2b$10$osXoLLTyajEtRcU6yf5cjuBG4KLefFBOjw1swZPUOFF0xxiC/9jSK', '0123456789', '01-01-01', 'male', '2025-05-19 20:18:45', '2025-05-26 04:55:07', NULL, NULL, NULL, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1LCJpYXQiOjE3NDgyMzUzMDcsImV4cCI6MTc0ODg0MDEwN30.sm5kqgX97zozxhDCBZJBXKLIa7adjzWPCZn90zGv4oE'),
(26, 'testuser', 'testuser@gmail.com', '$2b$10$l2fX068Map6szOU86bjWu.v33/eXEwkOhklb3rnfHlGYJotPvy9R6', '0987654321', '00-00-001', 'male', '2025-05-19 20:26:32', '2025-05-22 18:00:53', NULL, NULL, 'https://res.cloudinary.com/nguyenngocanh/image/upload/v1747935037/images/mchinwjaaonzk7chzdkv.jpg', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI2LCJpYXQiOjE3NDc5MzYyMzMsImV4cCI6MTc0ODU0MTAzM30.bSlig2MHdb2qBzP1aUtIZ3YVg6vLWZJieNCdeQt1Jeg'),
(31, 'nguyen van a', 'toilaa@gmail.com', '$2b$10$cLirzBAFSznDmPhvIOGajuozBFUBXgBU7NGoeH/jzuL1RiuRk8RtC', '0123456789', '01-01-01', 'male', '2025-05-25 18:23:48', '2025-05-25 18:51:27', NULL, NULL, '', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMxLCJpYXQiOjE3NDgxOTc0MzQsImV4cCI6MTc0ODgwMjIzNH0.jE5p56RRLB1mK3L55eDQgNCnkIjjWHzAAkadUd_5iKA');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;