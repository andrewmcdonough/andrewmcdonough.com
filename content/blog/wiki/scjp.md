# SCJP
### Structure
  * Order of things in a file (comments disregarded): **package decaration** //(optional)//
  * There can only be **one public class** in a file.

### Syntax
  * Reserved words to note: **strictfp**, **assert**, **transient**,  **const**, **native**,  **default**,  **volitile**, **instanceof**.
### Access and modifiers

  * Access modifiers:
    - **public**: accessible to all in the Java Universe (JU)
    - **protected**: accessible to other classes in the **package**, and **subclasses** in other packages
    - **private**: only viewable by the class itself.
  * With no access modifier, the class has **default** behaviour - it is visible to all in the **same package**.
  * Non-access modifiers: **strictfp**, **final**, **abstract**.

### Classes
  * If a class contains any **abstract methods** it **must** be delcared **abstract**.
  * **abstract** method declarations, including (implicit) abstract interface method declarations should end with a **semicolon** (;) and not curly braces.

### Interfaces
  * An **interface** is a **contract** for behaviour with **NO** implementation code.
  * In an **interface**, the compiler treats method signatures as if they are prefixed by the modifiers **public abstract**.  Both/either **public** and **abstract** keywords could be included but are unnecessary.
  * **interfaces** are allowed to include **constants** which may **not** be overwritten by classes that **implement** the interface.  These constants **must** be **public static final**.  However, they do **not need** to be **declared** with any of these modifiers as these are **implicit**.
  * **instanceof** is an operator, instanceOf() is a function.

### Constructors
  * Constructors must **never have a return type**
  * A method may have the same name as the class (although it's bad practice), but this is **not a constructor**.
  * If no constructor is declared, the compiler will create a **default zero argument constructor**
  * All constructors must either call another constructor via this(args.....) or a constructor for the class that it extends, bubbling up until the zero argument constructor is called on Object.  If no call is specified **super() is called implicitly**
  * Constructors can **not be overridden** by subclasses.  A constructor with one or more objects will **not** call the super method with the same signature unless called explicitly, it will call super() unless another .
  * A constructor has to either call a **super** constructor (implicitly or expilitly) or a **this** as the first thing it does.  It is not allowed to do work then call another constructor.
  * Because of this **constructor chaining** bubbles to the top (Object's empty constructor) then returns back down the inheritance tree, doing the work **from top to bottom**.
## Links


  * [http://faq.javaranch.com/view?ScjpFaq|FAQ from Javaranch](/wiki/http://faq.javaranch.com/view?scjpfaq|faq_from_javaranch)
  * [http://saloon.javaranch.com/cgi-bin/ubb/ultimatebb.cgi?ubb=forum&f=24|Javaranch Forum](/wiki/http://saloon.javaranch.com/cgi-bin/ubb/ultimatebb.cgi?ubb=forum&f=24|javaranch_forum)
  * [http://www.javaprepare.com/quests/test.html|Practice test from javaprepare.com](/wiki/http://www.javaprepare.com/quests/test.html|practice_test_from_javaprepare.com)
  * [http://www.javacoffeebreak.com/articles/toptenerrors.html|Top ten errors programmers make](/wiki/http://www.javacoffeebreak.com/articles/toptenerrors.html|top_ten_errors_programmers_make)