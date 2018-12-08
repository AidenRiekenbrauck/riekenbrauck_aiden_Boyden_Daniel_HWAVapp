-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 08, 2018 at 02:00 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_movies`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_genre`
--

DROP TABLE IF EXISTS `tbl_genre`;
CREATE TABLE IF NOT EXISTS `tbl_genre` (
  `genre_ID` int(100) UNSIGNED NOT NULL AUTO_INCREMENT,
  `genre` varchar(100) NOT NULL,
  PRIMARY KEY (`genre_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_genre`
--

INSERT INTO `tbl_genre` (`genre_ID`, `genre`) VALUES
(1, 'action'),
(2, 'thriller'),
(3, 'comedy'),
(4, 'science fiction'),
(5, 'Drama');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_genre_mov`
--

DROP TABLE IF EXISTS `tbl_genre_mov`;
CREATE TABLE IF NOT EXISTS `tbl_genre_mov` (
  `linkID` int(100) UNSIGNED NOT NULL AUTO_INCREMENT,
  `movID` varchar(100) NOT NULL,
  `genreID` varchar(100) NOT NULL,
  PRIMARY KEY (`linkID`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_genre_mov`
--

INSERT INTO `tbl_genre_mov` (`linkID`, `movID`, `genreID`) VALUES
(1, '1', '4'),
(2, '2', '5'),
(3, '3', '5'),
(4, '4', '3'),
(5, '5', '3'),
(6, '6', '2'),
(7, '7', '3'),
(8, '8', '2'),
(9, '9', '3'),
(10, '10', '1'),
(11, '11', '1'),
(12, '12', '5'),
(13, '13', '5'),
(14, '14', '5'),
(15, '15', '3'),
(16, '16', '5'),
(17, '17', '2'),
(18, '18', '5'),
(19, '19', '2'),
(20, '20', '5'),
(21, '21', '2'),
(22, '22', '1'),
(23, '23', '5'),
(24, '24', '5'),
(25, '25', '2');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mov`
--

DROP TABLE IF EXISTS `tbl_mov`;
CREATE TABLE IF NOT EXISTS `tbl_mov` (
  `ID` int(100) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `author` varchar(100) NOT NULL,
  `vidDesc` varchar(300) NOT NULL,
  `duration_sec` varchar(100) NOT NULL,
  `uploadDate` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL,
  `coverImage` varchar(100) NOT NULL,
  `rating` varchar(100) NOT NULL,
  `visits` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_mov`
--

INSERT INTO `tbl_mov` (`ID`, `name`, `author`, `vidDesc`, `duration_sec`, `uploadDate`, `url`, `coverImage`, `rating`, `visits`) VALUES
(1, 'Fantastic Planet Trailer', 'René Laloux', 'On a faraway planet where blue giants rule, oppressed humanoids rebel against their machine-like leaders. ', '137', '1973', 'https://www.youtube.com/watch?v=SgCxCZNkQ9E', 'planet.png', '78', '2243277'),
(2, 'Taxi Driver Trailer', 'Martin Scorsese', 'A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute. ', '178', '1976', 'https://www.youtube.com/watch?v=sLpMx8_TYOo', 'taxi.png', '83', '923053'),
(3, 'Léon: The Professional Trailer', ' Luc Besson', 'Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin\'s trade. ', '151', '1994', 'https://www.youtube.com/watch?v=DcsirofJrlM', 'leon.png', '86', '3144687 '),
(4, 'Amélie Trailer', 'Jean-Pierre Jeunet', 'Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love. ', '62', '2001', 'https://www.youtube.com/watch?v=HUECWi5pX7o', 'amelie.png', '83', '1563224'),
(5, 'Napoleon Dynamite Trailer', 'Jared Hess', 'A listless and alienated teenager decides to help his new friend win the class presidency in their small western high school, while he must deal with his bizarre family life back home. ', '73', '2004', 'https://www.youtube.com/watch?v=ZHDi_AnqwN4', 'napoleon.png', '69', '1518654 '),
(6, ' Donnie Darko Trailer', 'Richard Kelly', 'A troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes, after he narrowly escapes a bizarre accident. ', '146', '2001', 'https://www.youtube.com/watch?v=ZZyBaFYFySk', 'donnie.png', '81', '3122537'),
(7, 'Snatch Trailer', 'Guy Ritchie', 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond. ', '116', '2000', 'https://www.youtube.com/watch?v=ni4tEtuTccc', 'snatch.png', '83', '841059'),
(8, 'American Psycho Trailer', 'Mary Harron', 'A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.', '124', '2000', 'https://www.youtube.com/watch?v=5YnGhW4UEhc', 'american.png', '76', '1128541'),
(9, 'Scott Pilgrim vs. the World Trailer', 'Edgar Wright', 'Scott Pilgrim must defeat his new girlfriend\'s seven evil exes in order to win her heart.', '152', '2010', 'https://www.youtube.com/watch?v=7wd5KEaOtm4', 'scott.png', '75', '2519957'),
(10, 'Smokin\' Aces Trailer', 'Joe Carnahan', 'When a Las Vegas performer-turned-snitch named Buddy Israel decides to turn state\'s evidence and testify against the mob, it seems that a whole lot of people would like to make sure he\'s no longer breathing. ', '128', '2006', 'https://www.youtube.com/watch?v=ohhxbsp8Mss', 'aces.png', '67', '852676'),
(11, 'Ip Man Trailer', 'Wilson Yip', 'During the Japanese invasion of 1937, when a wealthy martial artist is forced to leave his home and work to support his family, he reluctantly agrees to train others in the art of Wing Chun for self-defense.', '121', '2008', 'https://www.youtube.com/watch?v=1AJxXQ7xojE', 'ip.png', '80', '3377654'),
(12, 'Moonrise Kingdom Trailer', 'Wes Anderson', 'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them. ', '116', '2012', 'https://www.youtube.com/watch?v=_eOI3AamSm8', 'moon.png', '78', '2224943'),
(13, 'Her Trailer', 'Spike Jonze', 'In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need. ', '151', '2013', 'https://www.youtube.com/watch?v=6QRvTv_tpw0', 'her.png', '80', '4,299,008 '),
(14, 'Boyhood Trailer', 'Richard Linklater', 'The life of Mason, from early childhood to his arrival at college.', '105', '2014', 'https://www.youtube.com/watch?v=Y0oX0xiwOv8', 'boy.png', '79', '3837547'),
(15, 'The Grand Budapest Hotel Trailer', 'Wes Anderson', 'The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend. ', '145', '2014', 'https://www.youtube.com/watch?v=1Fg5iWmQjwk', 'hotel.png', '81', '11286911'),
(16, 'The Perks of Being a Wallflower Trailer', 'Stephen Chbosky', 'An introvert freshman is taken under the wings of two seniors who welcome him to the real world. ', '145', '2012', 'https://www.youtube.com/watch?v=n5rh7O4IDc0', 'perks.png', '80', '9205696'),
(17, 'Pulp Fiction Trailer', 'Quentin Tarantino', 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption. ', '185', '1994', 'https://www.youtube.com/watch?v=s7EdQ4FqbhY', 'pulp.png', '89', '4186300'),
(18, 'Being John Malkovitch Trailer', 'Spike Jonze', 'A puppeteer discovers a portal that leads literally into the head of movie star John Malkovich. ', '119', '1999', 'https://www.youtube.com/watch?v=2UuRFr0GnHM', 'john.png', '78', '249131'),
(19, 'No Country for Old Men Trailer', 'Coen Brothers', 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande. ', '150', '2007', 'https://www.youtube.com/watch?v=38A__WT3-o0', 'country.png', '81', '1506862'),
(20, 'Juno Trailer', 'Jason Reitman', 'Faced with an unplanned pregnancy, an offbeat young woman makes an unusual decision regarding her unborn child. ', '152', '2007', 'https://www.youtube.com/watch?v=K0SKf0K3bxg', 'juno.png', '75', '10251476'),
(21, 'Texas Chainsaw Massacre Trailer', 'Tobe Hooper', 'Two siblings and three of their friends en route to visit their grandfather\'s grave in Texas end up falling victim to a family of cannibalistic psychopaths. ', '100', '1974', 'https://www.youtube.com/watch?v=Vs3981DoINw', 'texas.png', '75', '3756386'),
(22, 'The Terminator 2 Trailer', 'James Cameron', 'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg. ', '125', '1991', 'https://www.youtube.com/watch?v=-W8CegO_Ixw', 'terminator.png', '85', '319684 '),
(23, 'High Fidelity Trailer', 'Stephen Frears', 'Rob, a record store owner and compulsive list maker, recounts his top five breakups, including the one in progress. ', '131', '2000', 'https://www.youtube.com/watch?v=6P4dXJ_Tvns', 'high.png', '75', '322044'),
(24, 'Seven Psychopaths Trailer', 'Martin McDonagh', 'A struggling screenwriter inadvertently becomes entangled in the Los Angeles criminal underworld after his oddball friends kidnap a gangster\'s beloved Shih Tzu. ', '152', '2012', 'https://www.youtube.com/watch?v=jsHR77oQKEY', 'seven.png', '72', '1807248'),
(25, 'Reservoir Dogs Trailer', 'Quentin Tarantino', 'A crime boss assembles a team of six experienced criminals to pull off a large jewellery heist.', '123', '1992', 'https://www.youtube.com/watch?v=vayksn4Y93A', 'dogs.png', '83', '1714245 ');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
