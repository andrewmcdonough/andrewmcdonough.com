====== Excel Validation ======

Customers often like to use Excel as a means of consolidating data that needs to be imported into a database.  Asking them to adhere to a consistent formatting can be a real pain.  Fortunately, Excel has an option to restrict cells to a particular format.


==== Lists ====


==== Dates ====
Excel uses a badly thought out way of storing dates that also has an odd bug, [[http://www.robweir.com/blog/2006/10/leap-back.html|which I won't go in to]].  If clients are entering data from, scratch, I tend to like them entering dates as text in the format YYYY-MM-DD.  You can validate for this using the following pattern:

  =AND((MID(A5,5,1)="-"),(MID(A5,8,1)="-"),(LEN(A5)=10),(INT(MID(A5,1,4))<9999),(INT(MID(A5,6,2))<=12),(INT(MID(A5,9,2))<=31))