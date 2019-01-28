====== Tomcat ======

web.xml

When a webapp is loaded, $CATALINA_HOME/conf/web.xml is parsed, then <APP_HOME>/WEB-INF.xml.  The shared version of web.xml should contain directives for all webapps.


===== Environment Variables =====

$CATALINA_HOME hold the path to the root of the Tomcat installation

===== Installing Under Windows =====

Tomcat can either be installed as a service, or can be run as a daemon.  It should always be run using the startup script in bin/

===== Users =====

Users are configured using conf/tomcat-user.xml

