# XSLT

XSLT (eXtensible Stylesheet Language Transformations) is a language for transforming one XML document to another  XML document.  

The most common destination document is an XHTML document.


XSL Transformations - a language for transforming XML documents into other XML documents.

XSLT uses [XPath](/wiki/xpath) to find information in an XML document


The root element of a XSLT document is either <xsl:transform> or <xsl:stylesheet>.  These are equivalent.  Therefore the header of an XSLT document will be:
  <xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
or
  <xsl:transform version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">




http://www.w3schools.com/xsl/