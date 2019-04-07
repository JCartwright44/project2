CREATE DATABASE rookie_db;

USE rookie_db;

CREATE TABLE players(
playerId INTEGER(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
playerName VARCHAR(50) NOT NULL,
pos VARCHAR(50) NOT NULL,
college VARCHAR(50) NOT NULL,
height INTEGER(50) NOT NULL,
weight INTEGER(3) NOT NULL,
adp DECIMAL(4, 2) NOT NULL
);

INSERT INTO players (playerName, pos, college, height, weight, adp)
VALUES ('Josh Jacobs', 'RB', 'Alabama', '70', '220', '01.67'),
('NKeal Harry', 'WR', 'Arizona State', '74', '228', '03.00'),
('DK Metcalf', 'WR', 'Ole Miss', '73', '228', '03.00'),
('AJ Brown', 'WR', 'Ole Miss', '72', '226', '06.00'),
('Hakeem Butler', 'WR', 'Iowa State', '77', '227', '06.33'),
('Kyler Murray', 'QB', 'Oklahoma', '70', '207', '07.00'),
('Marquise Brown', 'WR', 'Oklahoma', '69', '166', '09.33'),
('Kelvin Harmon', 'WR', 'NC State', '74', '221', '09.67'),
('David Montgomery', 'RB', 'Iowa State', '71', '216', '11.00'),
('ah Fant', 'TE', 'Iowa', '76', '249', '12.00'),
('TJ Hockenson', 'TE', 'Iowa', '77', '251', '13.33'),
('Damian Harris', 'RB', 'Alabama', '70', '216', '14.00'),
('Dwayne Haskins', 'QB', 'Ohio State', '73', '231', '15.67'),
('Miles Sanders', 'RB', 'Penn State', '71', '211', '15.67'),
('Parris Campbell', 'WR', 'Alabama', '72', '205', '16.33'),
('Darrell Henderson', 'RB', 'Memphis', '68', '208', '17.67'),
('Riley Ridey', 'WR', 'Georgia', '71', '199', '18.00'),
('Deebo Samuel', 'WR', 'South Carolina', '71', '214', '18.33'),
('Elijah Holyfield', 'RB', 'Georgia', '70', '217', '21.00'),
('Devin Singeltary', 'RB', 'Florida Atlantic', '67', '203', '24.33'),
('Andy Isabella', 'WR', 'UMass', '69', '188', '25.00'),
('Drew Lock', 'QB', 'Missouri', '76', '228', '25.33'),
('Irv Smith', 'TE', 'Alabama', '74', '242', '25.33'),
('JJ Arcega-Whiteside', 'WR', 'Stanford', '74', '225', '26.00'),
('David Blough', 'QB', 'Purdue', '73', '205', '29.00'),
('Damarea Crockett', 'RB', 'Missouri', '70', '225', '29.00'),
('Justice Hill', 'RB', 'Oklahoma State', '70', '198', '31.33'),
('Rodney Anderson', 'RB', 'Oklahoma', '72', '224', '32.33'),
('Benny Snell', 'RB', 'Kentucky', '70', '224', '33.00'),
('Daniel Jones', 'QB', 'Duke', '77', '221', '33.67'),
('Trayveon Williams', 'RB', 'Texas A&M', '68', '206', '34.00'),
('Miles Boykin', 'WR', 'tre Dame', '66', '220', '36.67'),
('Mike Weber', 'RB', 'Ohio State', '70', '211', '37.00'),
('Bryce Love', 'RB', 'Stanford', '69', '200', '37.00'),
('Mecole Hardman', 'WR', 'Georgia', '70', '187', '40.00'),
('Myles Gaskins', 'RB', 'Washington', '69', '205', '42.00'),
('KeeSean Johnson', 'WR', 'Fres State', '71', '201', '44.00'),
('Ryquell Armstead', 'RB', 'Temple', '71', '220', '45.50'),
('Will Grier', 'QB', 'West Virginia', '74', '217', '48.33'),
('Greg Dortch', 'WR', 'Wake Forrest', '67', '173', '48.50'),
('Jace Sternberger', 'TE', 'Texas A&M', '76', '251', '49.00'),
('Karan Higdon', 'RB', 'Michigan', '69', '206', '52.67'),
('Ryan Finley', 'QB', 'NC State', '76', '213', '54.00'),
('Alex Barnes', 'RB', 'Kansas State', '70', '226', '54.33'),
('Stanley Morgan', 'WR', 'Nebraska', '70', '202', '55.00'),
('Tre Watson', 'RB', 'Texas', '71', '195', '57.00'),
('Jalen Hurd', 'WR', 'Baylor', '77', '226', '58.67'),
('Tyre Brady', 'WR', 'Marshall', '75', '201', '59.00'),
('Emanuel Hall', 'WR', 'Missouri', '74', '200', '59.67'),
('James Williams', 'RB', 'Washington State', '71', '195', '60.33'),
('Trace McSorely', 'QB', 'Penn State', '70', '202', '62.50'),
('LJ Scott', 'RB', 'Michigan State', '70', '227', '64.00'),
('Tyree Jackson', 'QB', 'Buffalo', '79', '249', '64.50'),
('Terry Mclaurin', 'WR', 'Ohio State', '70', '208', '64.67'),
('Devine Ozigbo', 'RB', 'Nebraska', '70', '230', '67.00'),
('Preston Williams', 'WR', 'Colorado State', '76', '210', '68.33'),
('Antoine Wesley', 'WR', 'Texas Tech', '76', '206', '69.00'),
('Caleb Wilson', 'TE', 'UCLA', '76', '240', '69.00'),
('David Sills', 'WR', 'West Virginia', '75', '211', '70.00'),
('Dexter Williams', 'RB', 'rte Dame', '71', '212', '72.33'),
('Lil Jordan Humphrey', 'WR', 'Texas', '76', '210', '72.50');

USE rookie_db;
CREATE TABLE owners(
ownerId INTEGER(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
userName VARCHAR(50) NOT NULL,
passKey VARCHAR(50) NOT NULL,
avatar VARCHAR(50) NOT NULL,
leagueID INTEGER(50) NOT NULL,
teamID INTEGER(3) NOT NULL
);

INSERT INTO owners (ownerID, userName, passKey, avatar, leagueID, teamID)
VALUES ('1', 'User A', 'password', 'https://via.placeholder.com/150', '1', '1'),
('2', 'User B', 'password', 'https://via.placeholder.com/150', '1', '2'),
('3', 'User C', 'password', 'https://via.placeholder.com/150', '1', '3'),
('4', 'User D', 'password', 'https://via.placeholder.com/150', '1', '4'),
('5', 'User E', 'password', 'https://via.placeholder.com/150', '1', '5'),
('6', 'User F', 'password', 'https://via.placeholder.com/150', '1', '6'),
('7', 'User G', 'password', 'https://via.placeholder.com/150', '1', '7'),
('8', 'User H', 'password', 'https://via.placeholder.com/150', '1', '8'),
('9', 'User I', 'password', 'https://via.placeholder.com/150', '1', '9'),
('10', 'User J', 'password', 'https://via.placeholder.com/150', '1', '10'),
('11', 'User K', 'password', 'https://via.placeholder.com/150', '2', '1'),
('12', 'User L', 'password', 'https://via.placeholder.com/150', '2', '2'),
('13', 'User M', 'password', 'https://via.placeholder.com/150', '2', '3'),
('14', 'User N', 'password', 'https://via.placeholder.com/150', '2', '4'),
('15', 'User O', 'password', 'https://via.placeholder.com/150', '2', '5'),
('16', 'User P', 'password', 'https://via.placeholder.com/150', '2', '6'),
('17', 'User Q', 'password', 'https://via.placeholder.com/150', '2', '7'),
('18', 'User R', 'password', 'https://via.placeholder.com/150', '2', '8'),
('19', 'User S', 'password', 'https://via.placeholder.com/150', '2', '9'),
('20', 'User T', 'password', 'https://via.placeholder.com/150', '2', '10');

USE rookie_db;

CREATE TABLE leagues(
leagueID INTEGER(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
leagueName VARCHAR(50) NOT NULL,
rounds INTEGER(50) NOT NULL);

USE rookie_db;
INSERT INTO leagues (leagueName, rounds)
VALUES ('league A', '5'),
('league B', '5');

USE rookie_db;

CREATE TABLE teams(
teamID INTEGER(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
teamName VARCHAR(50) NOT NULL,
leagueID INTEGER(50),
ownerID INTEGER(50) NOT NULL,
playerTaken INTEGER(50),
roundTaken INTEGER(50)
);

USE rookie_db;
INSERT INTO teams (teamName, leagueID, ownerID)
VALUES ('Team A', '1', '1'),
('Team B', '1', '2'),
('Team C', '1', '3'),
('Team D', '1', '4'),
('Team E', '1', '5'),
('Team F', '1', '6'),
('Team G', '1', '7'),
('Team H', '1', '8'),
('Team I', '1', '9'),
('Team J', '1', '10'),
('Team K', '2', '11'),
('Team L', '2', '12'),
('Team M', '2', '13'),
('Team N', '2', '14'),
('Team O', '2', '15'),
('Team P', '2', '16'),
('Team Q', '2', '17'),
('Team R', '2', '18'),
('Team S', '2', '19'),
('Team T', '2', '20');

USE rookie_db;

CREATE TABLE teams_players(
teamPlayerID INTEGER(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
teamID VARCHAR(50) NOT NULL,
playerID INTEGER(50));

USE rookie_db;
INSERT INTO teams_players (teamID)
VALUES ('1'),
('2'),
('3'),
('4'),
('5'),
('6'),
('7'),
('8'),
('9'),
('10'),
('11'),
('12'),
('13'),
('14'),
('15'),
('16'),
('17'),
('18'),
('19'),
('20');