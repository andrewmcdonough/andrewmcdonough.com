====== Apache ======

  * [[Apache Mulitprocessing]]


To restart in Mandrake (eg Mars)

/usr/local/apache2/apachectl restart

To restart in RedHat

/etc/rc.d/init.d/httpd restart


===== Authentication with .htaccess=====
If you want to use the .htaccess files, you will have to add/change the following line in your httpd.conf:=
  AllowOverride AuthConfig



Create a password file in a directoy not accessible by the web.  I put mine in /var/www/passwd. Use the htpasswd command
  htpasswd -c /var/www/passwd/passwords andrew
And enter a password

<Directory /var/www/pathto/restricteddir>
  AuthType Basic
  AuthName "Restricted Files"
  AuthUserFile /var/www/passwd/passwords
  Require user andrew
</Directory>

[[http://httpd.apache.org/docs-2.0/howto/auth.html]]


===== Logging =====
IPs are best written to logs in IP form, not name form.  To process and acquire names, use the logresolve utility or the perl logresolve.pl

==== Rotation ====
Logs can be rotated to keep them small

==== Changing security claims ====
You may have problems in Internet Explorer with IFRAMES accessing cookies.  In order to get around this, add the following to the .htaccess file in the directory that writes the cookie:
  header append P3P 'CP="CAO DSP COR CURa ADMa DEVa OUR IND PHY ONL UNI COM NAV INT DEM PRE"'
You must, however, tell the web server to read the .htaccess file (AllowOverride Options FileInfo)


[[http://www.apcmag.com/apc/v3.nsf/0/0E1F5FECE427AAB4CA256D44001ABB45?OpenDocument]]
