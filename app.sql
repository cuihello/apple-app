-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: app_sys
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bus`
--

DROP TABLE IF EXISTS `bus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `bus` (
  `id` int(11) NOT NULL,
  `address` varchar(45) DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bus`
--

LOCK TABLES `bus` WRITE;
/*!40000 ALTER TABLE `bus` DISABLE KEYS */;
INSERT INTO `bus` VALUES (1,'东风广场','6点',15),(2,'东风广场','7点',8),(3,'东风广场','8点',20),(4,'东风广场','9点',14),(5,'东风广场','10点',3),(6,'东风广场','11点',6),(7,'东风广场','12点',5),(8,'东风广场','13点',4),(9,'东风广场','14点',7),(10,'东风广场','15点',8),(11,'东风广场','16点',10),(12,'东风广场','17点',14),(13,'东风广场','18点',7),(14,'东风广场','19点',18),(15,'东风广场','20点',8),(16,'东风广场','21点',11),(17,'云南大学呈贡校区','6点',13),(18,'云南大学呈贡校区','7点',14),(19,'云南大学呈贡校区','8点',8),(20,'云南大学呈贡校区','9点',11),(21,'云南大学呈贡校区','10点',7),(22,'云南大学呈贡校区','11点',18),(23,'云南大学呈贡校区','12点',30),(24,'云南大学呈贡校区','13点',27),(25,'云南大学呈贡校区','14点',19),(26,'云南大学呈贡校区','15点',34),(27,'云南大学呈贡校区','16点',14),(28,'云南大学呈贡校区','17点',23),(29,'云南大学呈贡校区','18点',17),(30,'云南大学呈贡校区','19点',40),(31,'云南大学呈贡校区','20点',16),(32,'云南大学呈贡校区','21点',12);
/*!40000 ALTER TABLE `bus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `usename` varchar(40) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`usename`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('lvbu88','lb8888','131452088@qq.com'),('qiaofeng','852963','22563987@qq.com'),('qingzhu','663322','77526314@qq.com'),('xiaocui','ion123','1928721464@qq.com'),('xiaoqiao','xq5201','159357852@qq.com'),('zhangfei','ynu456','25643789@qq.com'),('zhaoyun','xyz987','852364179@qq.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-07 14:00:55
