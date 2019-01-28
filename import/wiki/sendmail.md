====== Sendmail ======

===== Configuration files =====
A lot of sendmail's configuration files are held in a database structure which has a binary format.  The text versions of these files can be edited and then the databases rebuilt using the makemap command.  For example, to rebuild the virtusertable database:
  /usr/sbin/makemap hash virtusertable.db <virtusertable


===== Access =====

Mail servers should be configured so they are not 'open relay'.  IP addresses that are allowed to relay are specified in the access database.  The text version of the database (/etc/mail/access) is in the format:
  <IP Address>        RELAY
When changed, the access database should be rebuilt:
  /usr/sbin/makemap hash access.db <access




===== Virtual Users Table =====

  /usr/sbin/makemap hash virtusertable.db <virtusertable



===== Logs =====
Sendmail logs are usually kept in /var/log/mail.  The info log gives information on any mail passing through the system.  It is of the format:

  <date> <host> sendmail[pid]: <qid>: <what>=<value>

Where qid = queue id