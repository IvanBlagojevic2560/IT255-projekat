-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 18, 2016 at 11:15 PM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `vebprojekat`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `token2` varchar(128) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`, `token2`) VALUES
(1, 'admin1', 'd8578edf8458ce06fbc5bb76a58c5ca4', 'e1c8a5779e56ad3d2edd36b311cf0267eedb2a6f');

-- --------------------------------------------------------

--
-- Table structure for table `deo`
--

CREATE TABLE IF NOT EXISTS `deo` (
  `ID` int(11) NOT NULL,
  `NAZIV` varchar(120) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `deo`
--

INSERT INTO `deo` (`ID`, `NAZIV`) VALUES
(1, 'motor'),
(2, 'gume'),
(3, 'hladnjak'),
(4, 'volan'),
(5, 'menjac'),
(6, 'sofersajbna'),
(7, 'pumpa za gorivo');

-- --------------------------------------------------------

--
-- Table structure for table `forum`
--

CREATE TABLE IF NOT EXISTS `forum` (
  `id` int(11) NOT NULL,
  `komentar` varchar(200) COLLATE utf8_bin DEFAULT NULL,
  `user` varchar(50) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `forum`
--

INSERT INTO `forum` (`id`, `komentar`, `user`) VALUES
(77, 'pozz', 'qwerty'),
(78, 'aa', 'qwerty'),
(79, 'pozdrav', 'admin1');

-- --------------------------------------------------------

--
-- Table structure for table `korisnici`
--

CREATE TABLE IF NOT EXISTS `korisnici` (
  `korisnici_ID` int(11) NOT NULL,
  `firstname` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `lastname` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `username` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `adresa` varchar(100) COLLATE utf8_bin NOT NULL,
  `ulica` varchar(100) COLLATE utf8_bin NOT NULL,
  `telefon` varchar(100) COLLATE utf8_bin NOT NULL,
  `token` varchar(128) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `korisnici`
--

INSERT INTO `korisnici` (`korisnici_ID`, `firstname`, `lastname`, `username`, `password`, `adresa`, `ulica`, `telefon`, `token`) VALUES
(7, 'nenad', 'jevtic', 'qwerty', 'd8578edf8458ce06fbc5bb76a58c5ca4', 'paracin', 'francuska 10', '064 1111111', 'c8354573450e8398f35ee3ae2e51264dcb9d80bb');

-- --------------------------------------------------------

--
-- Table structure for table `korpa`
--

CREATE TABLE IF NOT EXISTS `korpa` (
  `id` int(11) NOT NULL,
  `username` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `NAZIV` varchar(200) DEFAULT NULL,
  `model` varchar(200) DEFAULT NULL,
  `opis` varchar(200) DEFAULT NULL,
  `cena` int(100) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `korpa`
--

INSERT INTO `korpa` (`id`, `username`, `NAZIV`, `model`, `opis`, `cena`) VALUES
(5, 'qwerty', 'motor', 'mercedes', 'polovan', 200000);

-- --------------------------------------------------------

--
-- Table structure for table `proizvodi`
--

CREATE TABLE IF NOT EXISTS `proizvodi` (
  `proizvodi_ID` int(11) NOT NULL,
  `model` varchar(120) DEFAULT NULL,
  `cena` int(10) DEFAULT NULL,
  `opis` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `DEO_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `proizvodi`
--

INSERT INTO `proizvodi` (`proizvodi_ID`, `model`, `cena`, `opis`, `DEO_ID`) VALUES
(122, 'audi', 7000, 'zimske', 2),
(123, 'mercedes', 200000, 'polovan', 1),
(124, 'jugo', 3000, 'polovan', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deo`
--
ALTER TABLE `deo`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `forum`
--
ALTER TABLE `forum`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `korisnici`
--
ALTER TABLE `korisnici`
  ADD PRIMARY KEY (`korisnici_ID`);

--
-- Indexes for table `korpa`
--
ALTER TABLE `korpa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `proizvodi`
--
ALTER TABLE `proizvodi`
  ADD PRIMARY KEY (`proizvodi_ID`), ADD KEY `model` (`model`), ADD KEY `model_2` (`model`), ADD KEY `DEO_ID` (`DEO_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `deo`
--
ALTER TABLE `deo`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `forum`
--
ALTER TABLE `forum`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=80;
--
-- AUTO_INCREMENT for table `korisnici`
--
ALTER TABLE `korisnici`
  MODIFY `korisnici_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `korpa`
--
ALTER TABLE `korpa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `proizvodi`
--
ALTER TABLE `proizvodi`
  MODIFY `proizvodi_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=126;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `proizvodi`
--
ALTER TABLE `proizvodi`
ADD CONSTRAINT `FK_RELATIONSHIP_3` FOREIGN KEY (`DEO_ID`) REFERENCES `deo` (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
