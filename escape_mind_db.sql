-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : Dim 23 mai 2021 à 20:34
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
-- Structure de la table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2021_02_11_210903_create_ranks_table', 1),
(4, '2021_02_11_210942_create_objects_table', 1),
(5, '2021_02_11_211016_create_tasks_bar_table', 1);

-- --------------------------------------------------------

--
-- Structure de la table `objects`
--

DROP TABLE IF EXISTS `objects`;
CREATE TABLE IF NOT EXISTS `objects` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `room` tinyint(4) NOT NULL DEFAULT '0',
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'https://forums.autodesk.com/t5/image/serverpage/image-id/360677iEC67ACD627FBBDDF/image-size/large?v=1.0&px=999',
  `audio` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `ranks`
--

DROP TABLE IF EXISTS `ranks`;
CREATE TABLE IF NOT EXISTS `ranks` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `taskbar_adv` int(11) NOT NULL DEFAULT '0',
  `playingtime` time NOT NULL DEFAULT '00:00:00',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `tasks_bar`
--

DROP TABLE IF EXISTS `tasks_bar`;
CREATE TABLE IF NOT EXISTS `tasks_bar` (
  `value` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `time_game` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_name_unique` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `time_game`, `created_at`, `updated_at`) VALUES
(1, 'sarah_mrct', NULL, '2020-03-17 09:18:20', '2021-05-23 18:34:26'),
(2, 'Lalecks', NULL, '2020-03-17 09:28:20', '2021-05-23 18:34:26'),
(3, 'Moises Schowalter', '2020-03-17 10:29:20', '2020-03-17 09:29:20', '2021-05-23 18:34:26'),
(4, 'Deshaun Streich', '2020-03-17 10:29:20', '2020-03-17 09:29:20', '2021-05-23 18:34:26'),
(5, 'Camylle Langosh', '2020-03-17 10:29:20', '2020-03-17 09:29:20', '2021-05-23 18:34:26'),
(6, 'Lucie Wyman', '2020-03-17 10:29:20', '2020-03-17 09:29:20', '2021-05-23 18:34:26'),
(7, 'Prof. Juliet Berge V', '2020-03-17 10:29:20', '2020-03-17 09:29:20', '2021-05-23 18:34:26'),
(8, 'Jedidiah Shanahan', '2020-03-17 10:29:20', '2020-03-17 09:29:20', '2021-05-23 18:34:26'),
(9, 'Prof. Brendon Dach', '2020-03-17 10:29:20', '2020-03-17 09:29:20', '2021-05-23 18:34:26'),
(10, 'Shania Tremblay', '2020-03-17 10:29:20', '2020-03-17 09:29:20', '2021-05-23 18:34:26'),
(11, 'Mr. Richmond Reynolds V', '2020-03-17 10:29:20', '2020-03-17 09:29:20', '2021-05-23 18:34:26'),
(12, 'Muriel Armstrong PhD', '2020-03-17 10:29:20', '2020-03-17 09:29:20', '2021-05-23 18:34:26'),
(13, 'Mr. Nico Hudson III', '2020-03-17 10:29:20', '2020-03-17 09:29:20', '2021-05-23 18:34:26'),
(14, 'Maymie Pacocha', '2020-03-17 10:29:20', '2020-03-17 09:29:20', '2021-05-23 18:34:26'),
(15, 'Haskell Erdman', '2020-03-17 10:29:20', '2020-03-17 09:29:20', '2021-05-23 18:34:26'),
(16, 'Prof. Rene Kutch', '2020-03-17 10:29:20', '2020-03-17 09:29:20', '2021-05-23 18:34:26');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
