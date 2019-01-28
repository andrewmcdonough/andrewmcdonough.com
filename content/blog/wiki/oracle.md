# Oracle

## Differences from MySQL
  * Quoting must be done using single quotes (') not double quotes (")


## SQL*Plus
SQL*Plus is annoying as it has no command editing, completion or history.  gqlplus is a better implementation which has all of these so should be used instead.  Below, gqlplus will be referred to as SQL*plus.

[http://gqlplus.sourceforge.net/](/wiki/http://gqlplus.sourceforge.net/)

You can connect to an oracle on database by launching SQL*Plus on the command line:

  sqlplus  <username>/<password>@<tnshost>

All of the table details are held in a meta table called all_tables.  Standard SQL queries can be made on this e.g.
  desc all_tables;
  select table_name from all_tables;  c.f. MySQL show tables;

You can run sql scripts at the command line by entering
  @/path/to/script

gqlplus - This is a replacement for sqlplus with command editing, command completion and command histories.

## SQL Navigator

F3 goes to run SQL


## Aliases

Oracle database aliases are defined in the tnsnames.ora file.  Use *locate* to find this.  The alias definitions are in the form:

  PRODSDB =
   (DESCRIPTION =

     (ADDRESS_LIST =
###### (PROTOCOL = TCP)(HOST = 217.158.112.240)(PORT
     )
     (CONNECT_DATA =
       (SERVICE_NAME = prodsdb)
     )
   )

Where PRODSDB is the alias name

## Oracle and PHP
PHP usually comes with functions built in to connect to Oracle databases.  The most modern of these is the Oracle Call Interface (OCI).  All functions belonging to this interface have the prefix OCI.

### Interacting with the database using OCI
  $connection = OCILogin($username, $password, $database_alias);
  $query = "SELECT * FROM sometable";
  $statement = OCIParse($connection, $query);
  OCIExecute($statement);
  while ( OCIFetchInto($statement, &$result) ) {
    print_r($result);
  }


## Reference



http://www-rohan.sdsu.edu/doc/oracle/server803/A54642_01/ch4.htm