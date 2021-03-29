-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 29 mars 2021 à 13:59
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
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'https://forums.autodesk.com/t5/image/serverpage/image-id/360677iEC67ACD627FBBDDF/image-size/large?v=1.0&px=999',
  `audio` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `used` tinyint(4) NOT NULL DEFAULT '0',
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
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_name_unique` (`name`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'sarah_mrct', 'sarah_mrct@gmail.com', NULL, '$2y$10$/N/hOVxhCOcVVDlu9tl4CO8JEhgYlwrW9p1VeeAokfqvC/Tjjb9PO', NULL, '2021-03-29 11:57:14', '2021-03-29 11:57:14'),
(2, 'Lalecks', 'alexlavaud@outlook.fr', NULL, '$2y$10$UNdRI1Doap6NXI9wmbH95..gjD0XeT/ZC631xZNi/2mUNIKUcSEju', NULL, '2021-03-29 11:57:14', '2021-03-29 11:57:14'),
(3, 'Miss Loyce Daugherty', '4QOwvEg2gmqX@mail.com', NULL, '$2y$10$JBGutFJTDtYVV8Kogyujqex7gaGlbYg3CBnM2usa5t48HrWtDpaF.', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(4, 'Freeman Hartmann', '0U4XgIVea1Zc@mail.com', NULL, '$2y$10$zb3PGBxdLc/sU6M3A059iudh0D5afiqJKXGSJSYczG1.BQ/NgZ23.', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(5, 'Miss Tierra Runolfsson', 'FtClpYQjqdHG@mail.com', NULL, '$2y$10$gSoBLWz70Va1LAEJn4EcSuDt7VghXtrL1orI1OtGg8DIVsIak/VhS', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(6, 'Quinten Larkin MD', '3lOiBlw7eN2R@mail.com', NULL, '$2y$10$8VF.uXqJAFJTLPLUqOMk..I0vEtPl0H9fBn28lHx93PMbgIZLWi.C', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(7, 'Rasheed Kertzmann', 'GftLSALjEmLS@mail.com', NULL, '$2y$10$jAeXq7DtD6qgd04fgLM2QOyTgIl/1hZ.ldwImGA3jVH0Fq9GRGMV2', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(8, 'Abbigail Rolfson', '6SiGsMdumc8c@mail.com', NULL, '$2y$10$kc8Q3eSC/IhKsmyeK6K2Kuog5LVBB9Zr.BWwep6w.z8pZ5ltlbsnm', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(9, 'Celia Berge', 'V1dGItFBR77m@mail.com', NULL, '$2y$10$PSr0xDCQKZlmi4mpW4jvcu6KGvRP64MVwXzBYfbMKcpYwtrsHVGl2', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(10, 'Vicky Howe', 'h3xhgagiriJx@mail.com', NULL, '$2y$10$kKcH7WDHVsrN8SUewd1V0uvxsd4Fzlj6VNUkkg4vG7LtcsfAnueWm', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(11, 'Hilton Bergstrom', 'gESuRSStWbhS@mail.com', NULL, '$2y$10$Sj8nJnm0XThKPsOLM6lT9.5slYfUr7Wz2K4LXDleJ4f/DTJnlrCbW', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(12, 'Elsie Littel', 'ywDqi0HlrgJD@mail.com', NULL, '$2y$10$6xDNyVPinZiJE9Nb.mJuhOyX9g2BciORbHQoeng.uV/35V9i7Qd0a', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(13, 'Elijah Toy', 'e8HTQMhc8jtk@mail.com', NULL, '$2y$10$JZ75eW/3EaLFQoZZ6Ju9yOTEM46MhMVhrQwGd43rzXiPxu92zJ98.', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(14, 'Eden Sanford', 'H4zcVKxRCzAG@mail.com', NULL, '$2y$10$/sX3PUbPNxk1yGQVyPNMreyr0oiXGqWLdfvSI1FQAZ7nWGeuJncRK', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(15, 'Deborah Gulgowski Sr.', 'O6iFxgjb6VEr@mail.com', NULL, '$2y$10$7DMVs1Gvf9JrFe7z0NAcNuywlSi9hu/sliZVomK1H6n.pWgvueqs6', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(16, 'Ms. Dessie Schultz', 'gZOJp8JhlR2X@mail.com', NULL, '$2y$10$yPRHNGYjjEmeLX0cWqPQdOF9.b4zSabi5.zWedsPe0uBlVmKusDFq', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(17, 'Dr. Lamont Dicki II', 'iCIylEeqHOx4@mail.com', NULL, '$2y$10$WOXKvf/UwCQdQcuHTZOJJOUaBySPJuK.GB6HAiROuKPTCfZHLfbkm', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(18, 'Opal Olson', 'zkE4P4Qx9zzb@mail.com', NULL, '$2y$10$vA9dfChJ2WZ823RZE08QauqTR7N3uuyiUCRLhYvHA6C6YJvkLT.VS', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(19, 'Mrs. Violette Torp', 'jSP7U7I4fpHd@mail.com', NULL, '$2y$10$7sfJsvPgIsa78hASIYGXVeL2fhLGmWeagdJQ9RweQCDY.dEoylkT.', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(20, 'Cindy Mosciski', 'eewqFaGj3L1Y@mail.com', NULL, '$2y$10$EZlsexmskqmqPwgv9WjoEOpEvK5dhp4gCBxWStWRsu4ICFBTc2sRG', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(21, 'Mrs. Sabryna Yundt V', 'GMHSRVzNIKkg@mail.com', NULL, '$2y$10$tAPZLsu/YkuVM/pwXDCIqO4ggoUp8RPUp5uiwAgzJL2oK.DAUxJZ6', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(22, 'Veda Hilpert', 'pX0dPwd5vTCH@mail.com', NULL, '$2y$10$oIQqp6kwfiiRZH3.767wHe7IOh2wHk2o6jcG/CeJnRldJvrUi36kO', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(23, 'Lloyd O\'Kon', 'VJ1zXMWEfsli@mail.com', NULL, '$2y$10$7OV97yPsJ.12TRPOl/9UmusQPj4Etaci16Vrh3UWdHSSBcOl/prLi', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(24, 'Adeline Gleason', 'Z9OnYnXZ7QPm@mail.com', NULL, '$2y$10$p5IUodeFuF6e5l6mz8W8MuLg2D.WQTqwB0gvRer72Edm.nzL.9cT.', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(25, 'Darby Beer', 'INMvWFWDD5Mn@mail.com', NULL, '$2y$10$u4F2O4iNc8bHl0ducg5vv.Cm8ZEC3HKoY3VB2AOlK550g.Ol5nRyu', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(26, 'Miss Adele Stark', 'bAz1Nt1RVwN0@mail.com', NULL, '$2y$10$8ELKkzoMRib/CpVX8EN/R.uAZx0mX6oVLT8pbpa5CitBra4b6OEWa', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20'),
(27, 'Dr. Angela Cruickshank DVM', 'hShFfuQd1ssk@mail.com', NULL, '$2y$10$wp1eo4pITuT5yI4mPLMwM.tSSjEEcI5ep.189hcenQ8My8yRgHU0K', NULL, '2020-03-17 09:09:20', '2020-03-17 09:12:20');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
