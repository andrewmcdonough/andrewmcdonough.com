====== QR Codes ======

QR Codes are 2-d bar codes.

==== Rails ====

Install Plugin
  ./script/plugin install http://qrcode-rails.googlecode.com/svn/trunk/plugins/qrcode

Usage: qrcode(url, pixel size, type_number, id_of_generated_div) e.g.

 <%= qrcode('http://www.google.com/', 2, 8, 'my-qrcode') %>
 

