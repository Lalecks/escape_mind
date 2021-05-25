-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 25 mai 2021 à 13:46
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `escape_mind_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `time_game` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '10:00',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_name_unique` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `time_game`, `created_at`, `updated_at`) VALUES
(1, 'sarah_mrct', '10:00', '2021-05-25 11:45:54', '2021-05-25 11:45:54'),
(2, 'Lalecks', '10:00', '2020-03-17 09:28:20', '2021-05-25 11:45:54'),
(3, 'Shania Rempel', '19:00', NULL, NULL),
(4, 'Gust Eichmann', '19:00', NULL, NULL),
(5, 'Geoffrey Cummerata', '19:00', NULL, NULL),
(6, 'Mr. Bailey Bahringer', '19:00', NULL, NULL),
(7, 'Horace Gutmann', '19:00', NULL, NULL),
(8, 'Jamaal Keeling', '19:00', NULL, NULL),
(9, 'Emerson Bailey', '19:00', NULL, NULL),
(10, 'Dr. Hobart Davis', '19:00', NULL, NULL),
(11, 'Lisette Ebert', '19:00', NULL, NULL),
(12, 'Lora Wuckert', '19:00', NULL, NULL),
(13, 'Alfred Hegmann', '19:00', NULL, NULL),
(14, 'Elda Dach', '19:00', NULL, NULL),
(15, 'Mr. Tito Schuster', '19:00', NULL, NULL),
(16, 'Gust Langworth', '19:00', NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
