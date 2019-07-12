/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : gree

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-07-12 09:06:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `piclist`
-- ----------------------------
DROP TABLE IF EXISTS `piclist`;
CREATE TABLE `piclist` (
  `picid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` float(7,2) unsigned NOT NULL,
  `imgurls` varchar(999) NOT NULL,
  PRIMARY KEY (`picid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of piclist
-- ----------------------------
INSERT INTO `piclist` VALUES ('1', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/6/21/7b4dc9e6-9d52-4357-b0ad-1cbedf4b1f7d.jpg', '', '0.00', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/6/15/83e78ded-a70d-4ba8-b3bf-a88975f95087.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/6/15/b78eefb0-f032-4183-a055-0cdb9a6904f7.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/6/15/f269aa9e-1ac7-4d1b-93ce-9e2ef0a078d4.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/6/15/672c0968-db84-4477-a1d4-9e0191abf259.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/6/15/7d56f172-5e70-4e5e-a794-d867540e1958.jpg');
INSERT INTO `piclist` VALUES ('2', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/23/f7dfdf3b-4e04-4c42-9ed6-1fad5c1e47bf.jpg', ' 智能垃圾桶 9L 环保自动开关桶盖 GA-0901 黄色 ', '199.00', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/23/f7dfdf3b-4e04-4c42-9ed6-1fad5c1e47bf.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/23/56b31a75-d331-4573-81b5-2f12efd1c52d.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/23/b0ac002a-2477-47b1-938d-e07616b54ba9.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/23/03d6b8d5-0fee-4345-8a51-beb01aa2b490.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/23/3f27a157-4d22-44ec-a707-74bbf2b84bb9.jpg');
INSERT INTO `piclist` VALUES ('3', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/5/28/1919fe77-dc88-4e69-832e-f8abffd50ceb.jpg', ' 落地扇 3档风速 八大功能 伴您清凉 FD-40X64Bh5 黑色 电风扇', '259.00', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/5/28/1919fe77-dc88-4e69-832e-f8abffd50ceb.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/5/28/484f98ba-3d08-4f0a-96de-ff3feba113ae.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/5/28/65c3e3bb-b244-4d8c-aebe-2773ef27e8be.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/5/28/71ba4b58-c864-44d3-9e7f-5dc758a8631d.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/5/28/03035814-e4e4-40aa-a25c-861a21c93888.jpg');
INSERT INTO `piclist` VALUES ('4', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/6/14/d9a4d5c9-769c-40e3-b9af-12df14b2b119.jpg', ' 电暖器 欧式快热炉 恒温省电 过热保护 NBDB-X6020 白+香槟金', '319.00', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/6/14/d9a4d5c9-769c-40e3-b9af-12df14b2b119.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/6/14/1228d221-6936-4b9b-b33b-2801a45d4cb7.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/6/14/11dc426d-12a4-4de4-b6c1-80f5d0e51fea.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/6/14/3a9dd3e4-6592-404c-83cf-7b022362fe4b.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/6/14/0d9a3522-af84-4eae-85e1-60e56194cfe2.jpg');
INSERT INTO `piclist` VALUES ('5', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/25/4f29577c-672c-41ad-9a71-8e7682a2af7c.jpg', ' 冷风扇 4档风速 红外遥控 畅享清凉风 KS-0602DahG-WG 白+金色', '438.00', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/25/4f29577c-672c-41ad-9a71-8e7682a2af7c.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/25/857173a0-6922-4b79-be64-02c7107ce321.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/25/23f74927-9c23-4b18-af94-303a820e4c0c.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/25/8e48f2ff-ec63-4994-aae1-f6fb0e6174b5.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/25/24eae9ba-15f4-4707-9056-7b9da6324239.jpg');
INSERT INTO `piclist` VALUES ('6', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/15/500c06e2-0123-4e7c-b932-26b700902d7f.jpg', ' 塔扇 5档风速 广角柔风 立享清爽 FL-0902Bh 淡蓝色 电风扇', '439.00', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/15/500c06e2-0123-4e7c-b932-26b700902d7f.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/15/43223329-fa08-4ed9-8e2e-a5a03d28fd07.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/15/b8be0a3c-4b51-4d28-86af-1968ca7a92dc.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/15/d67fe612-fe73-4a95-aff9-a9c2da33917a.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/15/836d8157-c2d7-4aef-bb96-9219bff80e24.jpg');
INSERT INTO `piclist` VALUES ('7', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/5/28/09e57621-4969-45f3-ad93-fd14c5ae1e52.jpg', ' 雾化扇_一机两用 凉爽舒适_WKY-30X60Bh5 白色+蓝', '599.00', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/5/28/09e57621-4969-45f3-ad93-fd14c5ae1e52.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/5/28/7c243fdc-1171-4954-8661-009c046849b0.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/5/28/846f394d-3390-4b82-a83e-a69298614d47.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/5/28/e38280ad-887e-4229-9825-d4e4dc637095.jpg,https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/5/28/2ee966ab-67e3-414d-8a8c-ed386548ff80.jpg');

-- ----------------------------
-- Table structure for `usertable`
-- ----------------------------
DROP TABLE IF EXISTS `usertable`;
CREATE TABLE `usertable` (
  `uesrid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `tel` varchar(20) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uesrid`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of usertable
-- ----------------------------
INSERT INTO `usertable` VALUES ('11', '13867736889', 'da39a3ee5e6b4b0d3255bfef95601890afd80709');
INSERT INTO `usertable` VALUES ('15', '13566666222', 'da39a3ee5e6b4b0d3255bfef95601890afd80709');
INSERT INTO `usertable` VALUES ('16', '13611111111', 'da39a3ee5e6b4b0d3255bfef95601890afd80709');
INSERT INTO `usertable` VALUES ('19', '13676418015', 'bfff2dd4f1b310eb0dbf593bd83f94dd8d34077e');
INSERT INTO `usertable` VALUES ('21', '13676418011', 'ade3e98ac59f9d00ba5faaaca1a9a8ea48a1f9f3');
INSERT INTO `usertable` VALUES ('22', '13676418012', 'ade3e98ac59f9d00ba5faaaca1a9a8ea48a1f9f3');
INSERT INTO `usertable` VALUES ('24', '15167086453', 'ade3e98ac59f9d00ba5faaaca1a9a8ea48a1f9f3');
INSERT INTO `usertable` VALUES ('25', '13735053292', 'ade3e98ac59f9d00ba5faaaca1a9a8ea48a1f9f3');
INSERT INTO `usertable` VALUES ('26', '13400000000', 'ade3e98ac59f9d00ba5faaaca1a9a8ea48a1f9f3');
