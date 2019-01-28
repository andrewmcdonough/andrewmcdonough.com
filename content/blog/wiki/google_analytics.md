====== Google Analytics ======
Google Analytics is my preferred method for monitoring visitors to your website.  To set it up:

  * Sign up at www.google.com/analytics
  * Add the following to each of your pages, substituting UA-YOUR-GOOGLE-ID with the tracker ID Google issues you with:

  <script type="text/javascript">
    var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
    document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
  </script>
  <script type="text/javascript">
    try {
      var pageTracker = _gat._getTracker("UA-YOUR-GOOGLE-ID");
      pageTracker._trackPageview();
    } catch(err) {}</script>

===== Wordpress =====
Add the markup just before the </body> tag to the footer.php file in your theme's templete directory e.g. if you are using the classic template, add it to wp-content/themes/classic/footer.php


===== DokuWiki =====
Add the markup above to the file lib/tpl/defaul/main.php before </body> tag