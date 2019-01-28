====== log4j ======


log4j is Apache's Java logger.  It allows logging to be turned on and off at runtime, improving the performance of code that contains a lot of log statements.  log4j also allows inheritance of loggers facilitating a logger hierarchy, allowing a programmer to inspect the execution of the code at varying levels of detail.

  Logger.getRootLogger();
gets the root logger.

Other loggers (all children of the root logger are retrieved by:
  Logger logger = Logger.getLogger("pagegen.Page");	

===== Printing methods =====

debug(Object msg);
info(Object msg);
warn(Object msg);
error(Object msg);
fatal(Object msg);
log(Level l, Object msg)

===== Levels =====
DEBUG < INFO < WARN < ERROR < FATAL

===== Appenders =====

In log4j, an output destination is called an *appender*.  Log statements may output to more than one appender.  Appenders are available for the console, output files, JMS, NT Event loggers, GUI compenents etc.  Appenders are added using the addAppender() method.  More than one can be added to each logger and child loggers inherit their parent's appenders.

===== Configuration Files =====
log4j's configuration files can either be in a properties format (log4j.properties or log4j.lcf) or in xml (log4j.xml)

log4j will automatically look for log4j.properties or log4j.xml in the classpath


===== Tips =====
To avoid unnecessary string concatentations, check if logger is used e.g.
  if(logger.isDebugEnabled() {
        logger.debug("This" + "is" + "a" + "string");
  }


===== Readers =====
==== Chainsaw ====


==== Ganymede ====
Add the following lines to the configuration

  log4j.rootLogger=debug, R
or
  log4j.loggername.pagegen=debug, S, LOCALSERVER
  
  # LOCALSERVER logger is used by the Ganymede Eclipse plugin
  log4j.appender.LOCALSERVER=org.apache.log4j.net.SocketAppender
  log4j.appender.LOCALSERVER.RemoteHost=localhost
  log4j.appender.LOCALSERVER.Port=4445
  log4j.appender.LOCALSERVER.LocationInfo=true

==== Note ====
If you're not sure which logger to user, use a higher level logger like Apache's commons logger.  You can then change the underlying logger at a later date:

http://jakarta.apache.org/commons/logging/

 
 




[[http://logging.apache.org/log4j/docs/]]
[[http://saloon.javaranch.com/cgi-bin/ubb/ultimatebb.cgi?ubb=get_topic&f=64&t=001048]]