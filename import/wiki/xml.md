====== XML ======

[[XSLT]]

===== Parsers =====
==== SAX (Simple API for XML) ====
Scans document linearly and presents each item to the application only once.  The application must save the data at this point

==== DOM (Document Object Model) ====
Converts the document's contents into a node tree that can be searched via the API



==== CDATA ====


CDATA tags can be use to tell an XML parser to ignore anything inside them.  This can be particularly useful when you want a parse to ignore badly formed (not XHTML) HTML.  The start CDATA tag is <![CDATA[ and the end one is ]]> e.g.

  <sometag>
  <![CDATA[
  <br><img src="someimage.gif">
  
  ]]>
  </sometag>

[[http://www.w3schools.com/xml/xml_cdata.asp]]