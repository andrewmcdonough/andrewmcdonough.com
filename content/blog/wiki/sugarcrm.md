# SugarCRM


  chown apache.apache config.php
  chown -R apache.apache custom
  chown -R apache.apache modules
  chown -R apache.apache data
  chown -R apache.apache cache



  mysqladmin -p create customer_crm
  mysql -p
    grant all privileges on customer_crm.* to 'customer'@'localhost' identified by 'password';
    flush privileges