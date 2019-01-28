# Generics

  * Generics are a feature of a programming language that allows one variable to take different types depending on its context. (?)
  * This is most useful when dealing with collections
  * In C++ these are implemented using templates




## Generics in Java
Consider pulling an element out of a list in Java.  When the next() method is called, the object needs to be cast to the appropriate type.  If the type is not correct, this will not usually be realised until runtime.  Generics in Java allow us to tell the compiler what type of object to expect, catching type mismatch errors at compile time.


The implementation of Generics in Java is a highly contovertial topic.  Generics are implemented only at high level Java source and not in the JVM byte code.  Generics are converted to non generics by the compiler.

  * Reflection is not accurate



### Useful Links
  * http://java.sun.com/docs/books/tutorial/java/javaOO/generics.html
  * http://java.sun.com/j2se/1.5/pdf/generics-tutorial.pdf
  * http://en.wikipedia.org/wiki/Generic_programming