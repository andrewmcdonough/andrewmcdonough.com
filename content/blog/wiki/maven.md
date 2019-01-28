# Maven

Maven is a Java project management tool. 

  * Maven is similar to Ant but simpler.
  * A Maven project is any directory with a project.xml file in it

  * project.xml defines the project object model (POM)
  * maven.xml defines goals

The repository holds common libraries.  These libraries must be installed into the repository.
Under windows, the repository is normally found in:
  c:\Documents and Settings\<User>\.maven\repository

Maven uses plugins to execute goals.  Within a project's directory, a plugin is called as follows:

  mavin <plugin>:<goal>
  e.g. maven java:compile

The plugins are written in [Jelly](/wiki/jelly)

If a plugin has a default goal, it can be executed by:

maven <plugin>

## Constants

  * Constants can be defined in %HOME%/build.properties
  * They are referenced by ${constant.name}


## Installing Maven
  * Download maven and follow installation instructions
  * Set the environment variable MAVEN_HOME to 
  * Create a local repository by running
  %MAVEN_HOME%\bin\install_repo.bat %HOME%\.maven\repository




Installing jars

## Downloading libraries
You can define where the remote repository is held by changing the maven.repo.remote value in project.properties
  maven.repo.remote = http://www.ibiblio.org/maven

http://www.ibiblio.org/ is an open source maven repository,

## Files
  * maven.xml - contains project specific goals, preGoals and postGoals


## maven.xml



## Eclipse Setup

Tell Eclipse where the Maven repository is by setting the MAVEN_REPO variable in Window->Preferences->Build Path->Classpath Variables.  On Belfast the repository is in c:\java\maven-v.vv\repository


You can change into any maven-enabled project directories and type:
  maven eclipse
and a .project and .classpath will be create automatically.

Import into Eclipse and rebuild



[http://radio.weblogs.com/0112098/stories/2003/02/12/usingEclipseAndMaven.html](/wiki/http://radio.weblogs.com/0112098/stories/2003/02/12/usingeclipseandmaven.html)

[http://www.jadetower.org/muses/archives/000256.html](/wiki/http://www.jadetower.org/muses/archives/000256.html)

[http://maven.apache.org/start/integrate.html](/wiki/http://maven.apache.org/start/integrate.html)