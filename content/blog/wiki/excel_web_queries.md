====== Excel Web Queries ======
Excel web queries is a powerful way of retrieving data from websites and more importantly **web applications**.

The days of passing reports from web applications to CSV files that the user can open are over.  I now provide clean, formatted Excel spreadsheets that refresh at the user's request.

To create a new web query:

Data -> Get External Data -> New Web Query

Point this at any url that returns tab delimited, new line separated data.

===== Dynamic web queries =====
You can pass parameters via the get string to any script, for example, creating the following query will pass the parameter q:

  http://www.mydomain.com/double.php?q=["q","Enter number to double"]

When prompted for a cell, enter its reference preceded by an equals sign, e.g.

  =a1

You can change the value of the parameters at any time by right clicking the cells and clicking Parameters



