# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.25)
# Database: lunch_box_chi
# Generation Time: 2019-06-25 00:03:13 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table lunch_data
# ------------------------------------------------------------

DROP TABLE IF EXISTS `lunch_data`;

CREATE TABLE `lunch_data` (
  `lunchID` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `analysis` float DEFAULT NULL,
  `cost` varchar(255) DEFAULT '',
  `dateTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `description` varchar(500) DEFAULT '',
  `location` varchar(255) DEFAULT '',
  `restaurant` varchar(255) DEFAULT '',
  `weight` float DEFAULT NULL,
  PRIMARY KEY (`lunchID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `lunch_data` WRITE;
/*!40000 ALTER TABLE `lunch_data` DISABLE KEYS */;

INSERT INTO `lunch_data` (`lunchID`, `analysis`, `cost`, `dateTime`, `description`, `location`, `restaurant`, `weight`)
VALUES
	(1,4.35,'8.36','2019-06-16 18:36:56','Chicken Bowl, White Rice, Fajita Veggies, Black Beans, Fresh Tomato Salsa, Tomatillo-Red Chili Salsa, Sour Cream, Cheese (Extra), Romaine Lettuce','10 s lasalle st ste 106, chicago, il 60603','chipotle',1.92),
	(2,7.01,'8.00','2019-06-16 18:37:24','chicken bowl','230 w monroe st, chicago, il 60606','chipotle',1.14),
	(3,4.1,'8.36','2019-06-16 18:37:35','Tortilla on the Side, White Rice, Fajita Veggies, Black Beans, Fresh Tomato Salsa, Tomatillo-Red Chili Salsa, Sour Cream, Cheese (Extra), Romaine Lettuce','10 s lasalle st ste 106, chicago, il 60603','chipotle',2.04),
	(4,5.01,'10.57','2019-06-16 18:37:44','1 x Signature Sandwiches & Panini 1 x 1/2 Uptown Turkey Avocado (P) (1 x $0.50)	=	$0.50 1 x Mom\'s Harvest 1 x Fresh Salads 1 x Cafe Spinach Sweet Crisp Salad 1 x Strawberry Vinaigrette 1 x Signature & Primo Sides, 1 xMixed Greens Salad','120 s lasalle st, chicago, il 60603','corner bakery cafe',2.11),
	(5,5.13,'8.36','2019-06-16 18:37:53','Chicken Bowl Tortilla on the Side, White Rice, Fajita Veggies, Black Beans, Fresh Tomato Salsa, Tomatillo-Red Chili Salsa, Sour Cream, Cheese (Extra), Romaine Lettuce','10 s lasalle st ste 106, chicago, il 60603','chipotle',1.63),
	(6,5.36,'8.36','2019-06-16 18:38:02','Tortilla on the Side, White Rice, Fajita Veggies, Black Beans, Fresh Tomato Salsa, Tomatillo-Red Chili Salsa, Sour Cream, Cheese (Extra), Romaine Lettuce','230 w monroe st, chicago, il 60606','chipotle',1.56),
	(7,3.87,'8.36','2019-06-16 18:38:12','Chicken Bowl Tortilla on the Side, White Rice, Fajita Veggies, Black Beans, Fresh Tomato Salsa, Tomatillo-Red Chili Salsa, Sour Cream, Cheese (Extra), Romaine Lettuce','10 s lasalle st ste 106, chicago, il 60603','chipotle',2.16),
	(8,3.41,'11','2019-06-16 18:38:20','Sandwich and Soup','120 s lasalle st, chicago, il 60603','corner bakery cafe',3.23),
	(9,5.33,'10.02','2019-06-16 18:38:31','chicken roti rice plate, all toppings included','310 w adams st, chicago, il 60606','roti modern mediterranean',1.88),
	(10,3.98,'8.36','2019-06-16 18:38:38','chicken bowl tortilla on the side, white rice, fajita veggies, black beans, fresh tomato salsa, tomatillo-red chili salsa, sour cream, cheese (extra), romaine lettucechicken bowl tortilla on the side, white rice, fajita veggies, black beans, fresh tomato salsa, tomatillo-red chili salsa, sour cream, cheese (extra), romaine lettuce','10 s lasalle st ste 106, chicago, il 60603','chipotle',2.1),
	(11,5.22,'8.36','2019-06-16 18:38:46','chicken bowl tortilla on the side, brown rice, fajita veggies, black beans, fresh tomato salsa, tomatillo-red chili salsa, cheese (extra), romaine lettuce','10 s lasalle st ste 106, chicago, il 60603','chipotle',1.6),
	(12,5.97,'10.09','2019-06-16 18:38:54','rice plate chicken roti','310 w adams st, chicago, il 60606','roti modern mediterranean',1.69),
	(13,4.4,'8.36','2019-06-16 18:39:01','chicken bowl tortilla on the side, brown rice, fajita veggies, black beans, fresh tomato salsa, tomatillo-red chili salsa, cheese (extra), romaine lettuce','10 s lasalle st ste 106, chicago, il 60603','chipotle',1.9),
	(14,3.98,'8.36','2019-06-16 18:39:09','chicken bowl tortilla on the side, brown rice, fajita veggies, pinto beans, fresh tomato salsa, tomatillo-red chili salsa, sour cream, cheese (extra), romaine lettuce','10 s lasalle st ste 106, chicago, il 60603','chipotle',2.1),
	(15,9.55,'10.51','2019-06-16 18:39:18','#13 the original italian (regular)','200 w monroe st #120, chicago, il 60606','jersey mike\'s subs',1.1),
	(16,36.03,'46.84','2019-06-16 18:39:25','1 jumbo lobster roll, 1 regular lobster roll','134 n lasalle st, chicago, il 60602','luke\'s lobster',1.3),
	(17,6.89,'5.99','2019-06-16 18:39:34','blackforest ham footlong sub on wheat','211 w adams st, chicago, il 60606','subway',0.87),
	(18,4.78,'8.36','2019-06-16 18:39:42','chicken bowl white rice, fajita veggies, black beans, fresh tomato salsa, roasted chili-corn salsa, tomatillo-red chili salsa, cheese (extra), romaine lettuce','10 s lasalle st ste 106, chicago, il 60603','chipotle',1.75),
	(19,8.05,'11.59','2019-06-16 18:39:48','green goddess chicken cobb salad box lunch','2 n michigan ave, chicago, il 60602','panera bread',1.44),
	(20,9.29,'8.36','2019-06-16 18:40:01','big italian','205 w monroe st, chicago, il 60606','jimmy john\'s',0.9),
	(21,6.69,'8.36','2019-06-16 18:40:03','chicken bowl tortilla on the side, brown rice, fajita veggies, black beans, fresh tomato salsa, roasted chili-corn salsa, tomatillo-red chili salsa, cheese (extra), romaine lettuce','230 w monroe st, chicago, il 60606','chipotle',1.25),
	(22,5.57,'8.36','2019-06-16 18:40:10','chicken bowl tortilla on the side, brown rice, fajita veggies, black beans, fresh tomato salsa, roasted chili-corn salsa, tomatillo-red chili salsa, cheese (extra), romaine lettuce','8 e madison st, chicago, il 60602','chipotle',1.5),
	(23,5.76,'6.68','2019-06-17 20:07:37','footlong cold cut combo','211 w adams st, chicago, il 60606','subway',1.16),
	(24,4.31,'8.36','2019-06-18 18:03:06','chicken bowl','291 e ontario st, chicago, il 60611','chipotle',1.94);

/*!40000 ALTER TABLE `lunch_data` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
