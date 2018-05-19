-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema yourmileage
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `yourmileage` ;

-- -----------------------------------------------------
-- Schema yourmileage
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `yourmileage` DEFAULT CHARACTER SET utf8 ;
USE `yourmileage` ;

-- -----------------------------------------------------
-- Table `MileageDriven`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MileageDriven` ;

CREATE TABLE IF NOT EXISTS `MileageDriven` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `day` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `miles_driven` DECIMAL(4,2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
 DROP USER yourmileage@localhost;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'yourmileage'@'localhost' IDENTIFIED BY 'yourmileage';
GRANT SELECT, INSERT, UPDATE, DELETE ON *.* TO yourmileage@localhost;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `MileageDriven`
-- -----------------------------------------------------
START TRANSACTION;
USE `yourmileage`;
INSERT INTO `MileageDriven` (`id`, `day`, `miles_driven`) VALUES (DEFAULT, '2018-05-08 20:00', 2.32);
INSERT INTO `MileageDriven` (`id`, `day`, `miles_driven`) VALUES (DEFAULT, '2018-05-10 20:00', 8.02);
INSERT INTO `MileageDriven` (`id`, `day`, `miles_driven`) VALUES (DEFAULT, '2018-05-11', 12.20);
INSERT INTO `MileageDriven` (`id`, `day`, `miles_driven`) VALUES (DEFAULT, '2018-05-11 20:00', 20.00);

COMMIT;
