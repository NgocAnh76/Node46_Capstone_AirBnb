-- -------------------------------------------------------------
-- TablePlus 6.4.8(608)
--
-- https://tableplus.com/
--
-- Database: db-capstone-airbnb
-- Generation Time: 2025-05-27 00:19:00.1840
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `locations`;
CREATE TABLE `locations` (
  `location_id` int NOT NULL AUTO_INCREMENT,
  `name_location` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `nation` int NOT NULL,
  `image_location` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `locations` (`location_id`, `name_location`, `province`, `nation`, `image_location`, `created_at`, `updated_at`) VALUES
(1, 'New York', 'New York', 1, 'https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Fdestinations%2F1%2F1.png&w=384&q=75', '2025-01-03 15:04:34', '2025-01-03 15:04:34'),
(2, 'London', 'London', 44, 'https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Fdestinations%2F1%2F2.png&w=384&q=75', '2025-01-03 15:04:34', '2025-01-03 15:04:34'),
(3, 'Barcelona', 'Barcelona', 34, 'https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Fdestinations%2F1%2F3.png&w=384&q=75', '2025-01-03 15:04:34', '2025-01-03 15:04:34'),
(4, 'Roma', 'Roma', 39, 'https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Fdestinations%2F1%2F5.png&w=384&q=75', '2025-01-03 15:04:34', '2025-01-03 15:04:34'),
(5, 'Sydney', 'New South Wales', 61, 'https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Fdestinations%2F1%2F4.png&w=384&q=75', '2025-01-03 15:04:34', '2025-01-03 15:04:34'),
(6, 'Đà Lạt', 'Lâm Đồng', 84, 'https://nld.mediacdn.vn/291774122806476800/2024/12/8/anh-11-nguyen-tat-thang-3-17336232087871905002186.jpg', '2025-05-23 08:43:35', '2025-05-23 08:43:35'),
(7, 'Hồ Chí Minh', 'Hồ Chí Minh', 84, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WbY0hP9klr6R3n6DxvIISw2veARaEto-5g&s', '2025-01-03 15:04:34', '2025-03-12 09:26:23'),
(8, 'Thủ Đô Hà Nội', 'Hà Nội', 84, 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-ha-noi.jpg', '2025-01-03 15:04:34', '2025-01-03 15:04:34'),
(9, 'Đà Nẵng', 'Đà Nẵng', 84, 'https://vietnamdailytour.vn/wp-content/uploads/2022/08/cau-rong-da-nang.jpg', '2025-01-03 15:04:34', '2025-05-14 18:07:13'),
(10, 'Lý Sơn', 'Quảng Ngãi', 84, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghoDEU6xgQlnhfJZ7AR3F7yYu-AOnLBP8Zg&s', '2025-01-03 15:04:34', '2025-05-14 18:07:13'),
(11, 'TP.Nha Trang', 'Nha Trang', 84, 'https://q-xx.bstatic.com/xdata/images/city/170x136/688907.jpg?k=8a219233969467d9f7ff828918cce2a53b4db6f1da1039d27222441ffb97c409&o=', '2025-03-10 18:15:02', '2025-03-10 18:15:02');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;