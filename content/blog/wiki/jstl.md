# JSTL

JSTL (JSP Standard Tag Library) is a collection of JSP tags included in the J2EE spec.  It actually consists of five sets of tags

  * **core** -  control flow statements and input/output
  * **xml** -  XML processing
  * **fmt** -  internationalization
  * **sql** -  Database access.
  * **functions** - Expression Language functions


## Header

  <%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>

## Assignment

  <c:set var="myvar" value="value"/>

## Reading variables

  <c:out value="${myvar}"/>

Request atttibutes, request.getAttribute("name") are not needed, the are accessed by the ${name} syntax.





## Loops
  <c:forEach items="${somelist}" var="element">
    do something with ${element}
  </c:forEach>


## If else becomes choose when
  <c:choose>
    <c:when test="sometest">
      do something when test is true
    </c:when>
    <c:otherwise>
      do something when test is false
    </c:otherwise>
  <c:choose>











   <jsp:useBean id="now" class="java.util.Date" />


"${not empty address.lastName}" 