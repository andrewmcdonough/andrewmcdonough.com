====== Apache Multiprocessing ======
  * From Apache 2.0, you can choose the way that Apache handles simultaneos requests.  This is done by chosing a Multiprocessing Module **(MPM)**.
  * The MPM is chosen at configuration time, before compilation.
  * Which MPM to choose, depends on how you want your server to perform.
  * UNIX's default method is **prefork**, which is simalar to Apache 1.3's multiprocessing method.


==== Links ====
  * http://httpd.apache.org/docs/2.0/mpm.html
  * http://www.onlamp.com/pub/a/apache/2001/06/19/apache_2.html