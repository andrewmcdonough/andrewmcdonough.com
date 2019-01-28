====== Cocoon ======
Cocoon is an [[XML]] publishing framework developed on top of the [[Avalon]] Server Framework.

Separation of Concerns - Making user people can interact and collaborate on a project without getting in each others way.


===== Installing Cocoon on Tomcat =====
  * Download the cocoon tar
  * Extract it
  * To build the war file run 
    build war
  * The war file should be found in /cocoon/build/cocoon/build.war
  * Copy build.war to the tomcat webapps directory








Cocoon Forms (former Woody) framework




Copy cocoon.properties from cocoon's root directory to $CATALINA_HOME/conf/




  * sitemap.xmap - The sitemap file (usually located in $CATALINA_HOME/webapps/cocoon
  * cocoon.xconf -
  * cocoon.roles - mapping file - mappings for implementations to names - if the default implementation is to be overrides

===== sitemap.xmap =====
	

  <?xml version="1.0" encoding="iso-8859-1"?>
  <map:sitemap xmlns:map="http://apache.org/cocoon/sitemap/1.0">
    <map:pipelines>
      <map:pipeline>
         <map:match pattern="*.html">
           <map:generate src="{1}.xml"/>  
           <!-- Note that {1} is substituted by the pattern matched by the * wildcard -->
           <map:transform src="<filename>.xsl"/>
           <map:serialize type="html"/>
         </map:match>
         <!-- more pattern matching -->
       </map:pipeline>
     </map:pipelines>
  </map:sitemap>

The sitemap maps URI space to resources.  It consist of components and pipelines.
Pipelines are made out of components.
All pipelines consist of at least two components; a generaor which produces the content and a serializer which delivers the content.
A generator generates SAX events and a serializer turns these events into a byte stream. 
Each generator has a unique name and is mapped to a java class
The logger attribute defines where messages produced by a component should go


===== cocoon.xconf =====
Contains settings for all cocoon applications.


XSPs - eXtensivel Server Pages
The Cocoon equivalent of a JSP - they contain both content and login and can import functionality via logicsheets cf. taglibs.

===== Synchronous and Asynchronous loading =====
  * When synchronous loading is used, the servlet waits until the new version of the page is generated.
  * When asynchronous loading is used new request use the old sitemap until compilation of the new one is complete.

The type of loading is found in cocoon.xconf under the reload-method property.





==== How to read the cache ====
  <map:match pattern="*/*/">
    <map:select type="resource-exists">
      <map:when test="cache/{1}/{2}/index.html">
        <map:read mime-type="test/html" src="cache/{1}/{2}/index.html"/> 
      </map:when>      	    
      <map:otherwise>
        <map:call function="navcontent">
          <map:parameter name="siteid" value="{1}"/>
          <map:parameter name="navid" value="{2}"/>
          <map:parameter name="contentid" value="index"/>                    
        </map:call>
      </map:otherwise>
    </map:select> 
  </map:match>   

===== JX Templates =====
http://cocoon.apache.org/2.1/userdocs/flow/jxtemplate.html

We use [[http://jakarta.apache.org/commons/jexl/|JEXL]]

===== Bibliography =====


  * [[http://www.w3.org/TR/xslt|WC3 Standards]]
  * [[http://localhost:8080/cocoon/docs/userdocs/concepts/index.html]]
  * [[http://cocoon.apache.org/2.1/howto/howto-html-pdf-publishing.html]]
  * [[http://wiki.apache.org/cocoon/DistributingCocoonApplications]]
  * [[http://cocoon.apache.org/2.1/tutorial/#Third-Party+Tutorials]]
  * [[http://cocoon.apache.org/2.1/tutorial/tutorial-develop-webapp.html]]
  * [[http://www.javaworld.com/javaworld/jw-09-2002/jw-0920-cocoon.html]]

  * [[http://new.cocoondev.org/main/index.html]]
  * [[http://cocoon.apache.org/2.1/userdocs/flow/jxtemplate.html]]