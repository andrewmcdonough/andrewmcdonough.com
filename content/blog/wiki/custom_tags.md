# JSP Custom Tags


Tag extension mechanism



extend the SimpleTagSupport class

all attributes are populated by calling standard setter methods



  public class CustomMyTag extends SimpleTagSupport{
    private String exampleString;
    public void setExampleString(String exampleString) {
      this.exampleString = exampleString;
    }
    public void doTag() throws IOException {
      JspWriter out = getJspContext().getOut();
      out.println("Hello");
    }
  }



## Evaluating Expressions


  String eValue = "";
  ExpressionEvaluator ee;
  VariableResolver vr = context.getVariableResolver();
	    
  ee = context.getExpressionEvaluator();
  try {
    eValue = (String) ee.evaluate(value, String.class, vr, null); 
  } catch (Exception e) {
	        
  }

${bean.value} is called an EL expression (Expression Language Expression)