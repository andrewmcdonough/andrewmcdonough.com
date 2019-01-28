# Oracle for MySQL Users

This page is intended for those who know how to use MySQL, and want to learn the Oracle syntax quickly, without having to trawl through a book teaching them from scratch about relational databases.  It assumes knowledge of MySQL, and will teach you how to do what you did in MySQL in Oracle.






### Summary

I will include some postgres equivalents.



^    Goal         ^ MySql        ^       Oracle        ^ Postgres         ^
| Get a list of tables | SHOW TABLES; | SELECT TABLE_NAME FROM ALL TABLES | \dt|
| Limit the number of results | //<query>// \\ LIMIT //<n>// | SELECT * FROM \\ (//<query>//) \\ WHERE ROWNUM < = //<n>//;|  |