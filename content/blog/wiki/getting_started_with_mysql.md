====== Getting started with MySQL ======
The following are examples of how to get started on a database of registrations, called registrations.

===== Creating a new database =====
  mysqladmin -u root -p create registrations

===== Logging into MySQL as root ====
  mysql -u root -p

===== Creating a user for your new database =====
  grant all privileges on registrations.* to 'registrations'@'localhost' identified by 'somepassword';
  flush privileges;
===== Show all databases ====
  show databases;
===== Opening your database =====
  use registrations;
===== Showing database's tables =====
  show tables;

===== Creating your first table =====

  CREATE TABLE registrations (
    id int(11) NOT NULL auto_increment,
    name varchar(255),
    email varchar(255),
    address text, 
    PRIMARY KEY  (id)
  ) TYPE=MyISAM;
===== Showing the structure of this table =====
  DESC registrations;
===== Removing this table if you want to start again =====
  DROP TABLE registrations;

===== Inserting data into this table =====
  INSERT INTO registrations SET name='Andrew McDonough', email='andrew@andrew.com', address='1 High Street';

===== Getting data out of the table =====
  SELECT * FROM registrations;
  SELECT id,name FROM registrations;
  SELECT id,name FROM registrations where id=1;
  SELECT  * FROM registrations where name like '%ndrew%';

===== Useful field types =====
  * int(11) - Integer (1,2,3...)
  * varchar(255) - String up to 255 characters
  * text - String of unlimited length
  * date - Date
  * datetime - Date and time
  * enum('Yes','No') - Enumeration only allowing the values Yes and No

====== Connecting to MySQL from PHP ======
===== Creating a database handle =====

To connect to MySQL from PHP, you will need to connect to the database and get a database **handle**.  I tend to assign this to the variable **$dbh**
  $dbh = @mysql_pconnect(DB_HOST, DB_USER, DB_PASS);
===== Opening the database ====
  @mysql_select_db(DB_NAME,$dbh);   
===== Inserting a record into the database =====
  $query = "INSERT INTO registrations SET name='Andrew', email='andrew@andrew.com', address='1 South Street'";
  $result = @mysql_query($query,$dbh);

===== Fetching a record from the database =====
  $query = "SELECT * FROM registrations WHERE id='1'";
  $result = @mysql_query($query,$dbh);
  $record = @mysql_fetch_array($result); 

===== Fetching all query results into an associative array ======
  $query = "SELECT * FROM registrations";
  $result=@mysql_query($query,$dbh);
  $result = array();
  while($row=@mysql_fetch_array($result)){
    array_push($result,$row);
  }

