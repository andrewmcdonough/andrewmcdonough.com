====== MySQL ======
  * [[Getting started with MySQL]]
  * [[MySQL Indexing]]

==== SQL ====
=== Creating a table ===
  CREATE TABLE sometable (
    id int(11) NOT NULL auto_increment,
    name varchar(40) default NULL,
    active enum('Yes','No') default NULL,
    PRIMARY KEY  (id)
  ) TYPE=MyISAM;


===== Admin =====
==== Starting ====

To start MySQL, run the mysql daemon, mysqld_safe e.g.

''/usr/local/mysql-standard-4.0.20-pc-linux-i686/bin/mysqld_safe &''

Sometimes (e.g. on Kellis) you need to specify where the data files are held:

  <PATH_TO_MYSQL>/mysqld_safe --datadir=/usr/local/var/lib/mysql

==== Monitoring ====
You can see what connections MySQL has open by running:
  mysql-standard-4.0.21-pc-linux-i686]# bin/mysqladmin processlist -p


===== Adding a user =====
  GRANT ALL PRIVILEGES ON dbname.* TO 'username'@'localhost' IDENTIFIED BY 'password' 

===== SQL Reference =====
==== Mathematic Functions ====
POW(X,Y) \\
POWER(X,Y) \\
SQRT(X)

MOD(N,M) \\
N % M \\
N MOD M

RAND() \\
RAND(N)

==== Resetting Auto Increment ====

  ALTER TABLE <tablename>  AUTO_INCREMENT= <number> ;
