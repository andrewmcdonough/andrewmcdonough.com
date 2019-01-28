====== Javascript ======

  * [[Rhino]] - A Javascript implementation in Java
  * [[Javascript Drag and Drop]]
  * [[DOM]]
  * [[Javascript Arrays|Arrays]]
  * [[Javascript Strings|Strings]]
===== Strings =====
  s.substring(start,end)
  s.split(delimiter)

===== Arrays =====



===== Control Flow =====
==== for in loops ====

  for (variable in object){
    // do something ( can use object[variable] for value )
  }

For example, to show all properties of the current document
  for (p in document) {
    alert(p+" = "+document[p]+"\n");
  }



===== Useful Functions =====

==== Type checking ====
isNumber(val)

===== Timeouts =====
Events can be set to make a function run after a given number of milliseconds:
  setTimeout("functionName()", 100);
To get an even to repeat, put this call inside the function itself and call it from body.onLoad



===== Events =====
  * onAbort - image
  * onBlur - select, text, text area
  * onChange - select, text, textarea
  * onClick - button, checkbox, radio, link, reset, submit, area
  * onError - image
  * onFocus - select, text, testarea
  * onLoad - windows, image
  * onMouseOver - link, area
  * onMouseOut - link, area
  * onSelect - text, textarea
  * onSubmit - form
  * onUnload - window

Event handlers can also be defined by naming an event handler.  For example

  document.onclick = clickHandler
  function clickHandler() {
    alert("Click handled");
  }

Note:  The event handler when assigned should not be followed by parentheses

===== Debugging =====


http://gleepglop.com/javascripts/logger/

===== Examples =====
==== Set as homepage ====
This probably only works in Internet Explorer
  <A HREF="#"
  onClick="this.style.behavior='url(#default#homepage)';
  this.setHomePage('http://www.yourwebsite.com');">
  Make this my homepage
  </A>

http://www.javascripttoolbox.com/  - with a fantastic javascript calendar.  Cheers Matt.



http://prototype.conio.net/




