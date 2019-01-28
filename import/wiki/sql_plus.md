====== SQL*Plus ======
SQL*Plus is annoying as it has no command editing, completion or history.  gqlplus is a better implementation which has all of these so should be used instead.  Below, gqlplus will be referred to as SQL*plus.

[[http://gqlplus.sourceforge.net/]]

You can connect to an oracle on database by launching SQL*Plus on the command line:

  sqlplus  <username>/<password>@<tnshost>

All of the table details are held in a meta table called all_tables.  Standard SQL queries can be made on this e.g.
  desc all_tables;
  select table_name from all_tables;  c.f. MySQL show tables;

You can run sql scripts at the command line by entering
  @/path/to/script


gqlplus - This is a replacement for sqlplus with command editing, command completion and command histories.

==== Changing column width ====
In 8i, SQL*Plus annoyingly sets the default column width to 80 characters.  This was increased to 150 in Oracle 9.  To chose your own value use the SET command to set LIN:
  SET LIN 200
Note that this will still wrap to the split of a SSH window.
SQL*Plus will also show headings at the top of each //page//.  This can be annoying, as the pagesize is set to 14 on our version.  Set this to a more sensible value to match your terminal.  To be honest, I don't find these headings useful, except at the top of the results, so I tend to set the pagesize to something very large e.g.
  SET PAGES 100



http://www.ss64.com/orasyntax/plus_set.html