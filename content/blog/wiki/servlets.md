====== Servlets ======



===== Directory layout =====

  * *.html, *.jsp etc - standard files
  * /WEB-INF/web.xml - The Web Application Deployment descriptor
  * /WEB-INF/classes/ - Any Java class files
  * /WEB-INF/lib - Any JAR files such as third party classes


===== Shared Libraries =====
  * $CATALINA_HOME/common/lib - visible to both web apps and internal Tomcat code.  Good for JDBC drivers
  * $CATALINA_HOME/shared/lib - visible to web apps but not internal Tomcat code.




===== Filters =====
(As of Servlet specification 2.3 )\\
Filters are a really useful way to make sure code is executed before and/or after the requests made to any servlet.  They are create by implementing the Filter interface and registering them in web.xml  Filters can be chained, eventually (although not necessarily) resulting in the execution of the servlet.

==== Example Filter ====

  import javax.servlet.*;
  import javax.servlet.http.*;
  public class MyFilter implements Filter {
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
                         throws IOException, Servlet Exception {
      // Code here executes before being passed to the servlets
      chain.doFilter(request, response);  // Pass on to the next in the chain, possibly the servlet itself
      // Code here executes afterthe servlet has executed
    }
  }
      