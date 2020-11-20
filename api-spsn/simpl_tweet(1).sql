-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  ven. 20 nov. 2020 à 16:26
-- Version du serveur :  8.0.18
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `simpl_tweet`
--

-- --------------------------------------------------------

--
-- Structure de la table `follows`
--

DROP TABLE IF EXISTS `follows`;
CREATE TABLE IF NOT EXISTS `follows` (
  `id_suivi` int(11) NOT NULL,
  `id_suiveur` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_suivi`,`id_suiveur`),
  KEY `id_suiveur` (`id_suiveur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
  `id_posts` int(11) NOT NULL AUTO_INCREMENT,
  `content_posts` varchar(255) NOT NULL,
  `like_posts` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userIdUsers` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_posts`),
  KEY `userIdUsers` (`userIdUsers`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `posts`
--

INSERT INTO `posts` (`id_posts`, `content_posts`, `like_posts`, `createdAt`, `updatedAt`, `userIdUsers`) VALUES
(7, 'Ceci est un post 1 de Bernard', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(8, 'J\'ai encore changé le contenu du post', 18, '2020-10-18 00:00:00', '2020-10-18 00:00:00', NULL),
(9, 'Ceci est un post 3 de Bernard\r\nCeci est un post 3 de Bernard\r\nCeci est un post 3 de Bernard\r\nCeci est un post 3 de Bernard', 0, '2020-10-18 00:00:00', '2020-10-18 00:00:00', NULL),
(10, 'Ceci est un post 4 de Bernard', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(11, 'Ceci est un post 5 de Bernard et non c\'est Laurent', 44, '2020-10-18 00:00:00', '2020-10-18 00:00:00', NULL),
(13, 'Ce message à été crée via PostMan par Bernard', 0, '2020-11-20 09:26:45', '2020-11-20 09:26:45', 3),
(14, 'Ce message à été crée via PostMan par Bernard', 0, '2020-11-20 09:30:50', '2020-11-20 09:30:50', 3);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id_users` int(11) NOT NULL AUTO_INCREMENT,
  `nom_users` varchar(255) NOT NULL,
  `prenom_users` varchar(255) NOT NULL,
  `pseudo_users` varchar(255) NOT NULL,
  `mail_users` varchar(255) NOT NULL,
  `password_users` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_users`),
  UNIQUE KEY `pseudo_users` (`pseudo_users`),
  UNIQUE KEY `mail_users` (`mail_users`),
  UNIQUE KEY `pseudo_users_2` (`pseudo_users`),
  UNIQUE KEY `mail_users_2` (`mail_users`),
  UNIQUE KEY `pseudo_users_3` (`pseudo_users`),
  UNIQUE KEY `mail_users_3` (`mail_users`),
  UNIQUE KEY `pseudo_users_4` (`pseudo_users`),
  UNIQUE KEY `mail_users_4` (`mail_users`),
  UNIQUE KEY `pseudo_users_5` (`pseudo_users`),
  UNIQUE KEY `mail_users_5` (`mail_users`),
  UNIQUE KEY `pseudo_users_6` (`pseudo_users`),
  UNIQUE KEY `mail_users_6` (`mail_users`),
  UNIQUE KEY `pseudo_users_7` (`pseudo_users`),
  UNIQUE KEY `mail_users_7` (`mail_users`),
  UNIQUE KEY `pseudo_users_8` (`pseudo_users`),
  UNIQUE KEY `mail_users_8` (`mail_users`),
  UNIQUE KEY `pseudo_users_9` (`pseudo_users`),
  UNIQUE KEY `mail_users_9` (`mail_users`),
  UNIQUE KEY `pseudo_users_10` (`pseudo_users`),
  UNIQUE KEY `mail_users_10` (`mail_users`),
  UNIQUE KEY `pseudo_users_11` (`pseudo_users`),
  UNIQUE KEY `mail_users_11` (`mail_users`),
  UNIQUE KEY `pseudo_users_12` (`pseudo_users`),
  UNIQUE KEY `mail_users_12` (`mail_users`),
  UNIQUE KEY `pseudo_users_13` (`pseudo_users`),
  UNIQUE KEY `mail_users_13` (`mail_users`),
  UNIQUE KEY `pseudo_users_14` (`pseudo_users`),
  UNIQUE KEY `mail_users_14` (`mail_users`),
  UNIQUE KEY `pseudo_users_15` (`pseudo_users`),
  UNIQUE KEY `mail_users_15` (`mail_users`),
  UNIQUE KEY `pseudo_users_16` (`pseudo_users`),
  UNIQUE KEY `mail_users_16` (`mail_users`),
  UNIQUE KEY `pseudo_users_17` (`pseudo_users`),
  UNIQUE KEY `mail_users_17` (`mail_users`),
  UNIQUE KEY `pseudo_users_18` (`pseudo_users`),
  UNIQUE KEY `mail_users_18` (`mail_users`),
  UNIQUE KEY `pseudo_users_19` (`pseudo_users`),
  UNIQUE KEY `mail_users_19` (`mail_users`),
  UNIQUE KEY `pseudo_users_20` (`pseudo_users`),
  UNIQUE KEY `mail_users_20` (`mail_users`),
  UNIQUE KEY `pseudo_users_21` (`pseudo_users`),
  UNIQUE KEY `mail_users_21` (`mail_users`),
  UNIQUE KEY `pseudo_users_22` (`pseudo_users`),
  UNIQUE KEY `mail_users_22` (`mail_users`),
  UNIQUE KEY `pseudo_users_23` (`pseudo_users`),
  UNIQUE KEY `mail_users_23` (`mail_users`),
  UNIQUE KEY `pseudo_users_24` (`pseudo_users`),
  UNIQUE KEY `mail_users_24` (`mail_users`),
  UNIQUE KEY `pseudo_users_25` (`pseudo_users`),
  UNIQUE KEY `mail_users_25` (`mail_users`),
  UNIQUE KEY `pseudo_users_26` (`pseudo_users`),
  UNIQUE KEY `mail_users_26` (`mail_users`),
  UNIQUE KEY `pseudo_users_27` (`pseudo_users`),
  UNIQUE KEY `mail_users_27` (`mail_users`),
  UNIQUE KEY `pseudo_users_28` (`pseudo_users`),
  UNIQUE KEY `mail_users_28` (`mail_users`),
  UNIQUE KEY `pseudo_users_29` (`pseudo_users`),
  UNIQUE KEY `mail_users_29` (`mail_users`),
  UNIQUE KEY `pseudo_users_30` (`pseudo_users`),
  UNIQUE KEY `mail_users_30` (`mail_users`),
  UNIQUE KEY `pseudo_users_31` (`pseudo_users`),
  UNIQUE KEY `mail_users_31` (`mail_users`),
  UNIQUE KEY `pseudo_users_32` (`pseudo_users`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id_users`, `nom_users`, `prenom_users`, `pseudo_users`, `mail_users`, `password_users`, `createdAt`, `updatedAt`) VALUES
(1, 'Bernard', 'Christophe', 'BerChris', 'Bernard@Christophe.com', '$2b$10$n7/uW98wRilmRRzFU6wEy.wXc.jLHQ9uMni4dt0GXlUjv.PnNB1ne', '2020-10-06 14:01:27', '2020-10-06 14:01:27'),
(3, 'Francis', 'Laurent', 'FranLau', 'Francis@Laurent.com', '$2b$10$jfCw.c2VcLQmVjYLH20eoeaNn8qoPV8vyfJbmV8YKAXwc7emYIdwC', '2020-10-13 07:26:17', '2020-10-13 07:26:17');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `follows`
--
ALTER TABLE `follows`
  ADD CONSTRAINT `follows_ibfk_1` FOREIGN KEY (`id_suivi`) REFERENCES `users` (`id_users`),
  ADD CONSTRAINT `follows_ibfk_2` FOREIGN KEY (`id_suiveur`) REFERENCES `users` (`id_users`);

--
-- Contraintes pour la table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userIdUsers`) REFERENCES `users` (`id_users`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
