====== Autoboxing ======
  * Autoboxing is a programming term for automatically treating a primitive type as an object without having to create the wrapper object.
  * Autoboxing is used in .NET and will be available in Java from [[J2SE 5.0]]
  * This will allow to use primitive types in Java collections.

Unboxing is the opposite, but achieves the same goal - less code for the same functionality.  It allows you to treat an Object wrapper for a primitive type as the primitive it represents, without calling a getValue method.

e.g.

  Integer x = new Integer(2);
  Integer y = new Integer(4);
  Integer z = x + y;  // The value of z is now 6

  



