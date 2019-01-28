  function search_update() {
    var s = document.getElementById("searchval");
    var v = s.value;
    var xmlhttp=false;
    /*@cc_on @*/
    /*@if (@_jscript_version >= 5)
    // JScript gives us Conditional compilation, we can cope with old IE versions.
    // and security blocked creation of the objects.
     try { 
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
     } catch (e) {
      try {
       xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (E) {
       xmlhttp = false;
      }
     }
    @end @*/
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
      xmlhttp = new XMLHttpRequest();
    } 
    var page="add5.php?number="+s.value;
    xmlhttp.open("GET",page,true);
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4) {
            var response = xmlhttp.responseText;
            var resultBox = document.getElementById("resultBox");
            resultBox.value = response;
        }
    }
    xmlhttp.send(null)
  }
  