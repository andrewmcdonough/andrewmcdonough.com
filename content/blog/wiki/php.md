# PHP

  * [PHP5](/wiki/php5)
  * [PHP File Handling](/wiki/php_file_handling)
  * [GD](/wiki/gd)
# Useful functions


## extract(array)

Walks through an assosiative array and initializes variable with names of the keys and values of the values.

## get_defined_vars()

returns all variables valid in the current scope


## Strings

### Explode = Split
  array explode (string separator, string string [, int limit])
### Implode = Join
  string implode (string glue, array pieces)
### Useful functions
  string strtolower (string str)
  string strtoupper (string string)



## Special Variables

$_POST - an associative array of the arguments sent via a post request
$_GET - an associative array of the arguments sent via a get request

$argv[0] - the get string


## Files




## PHP on the Command line
Reading input and writing output:
    $input = fgets(STDIN);
    fwrite(STDOUT, "My name is $input");
    exit(0);


$argc contains the number of arguments (including the script name), $argv contains the array of these (with the 0th element being the script name)


## Template Systems

Savant, Smarty, Flexy


[http://wact.sourceforge.net/index.php/EnterprisePatterns?PHPSESSID=d5feaa958710dc15556dea3251ef3899](/wiki/http://wact.sourceforge.net/index.php/enterprisepatterns?phpsessid=d5feaa958710dc15556dea3251ef3899)


[http://www.onlamp.com/pub/a/php/2003/03/27/php_gd.html|Installing GD](/wiki/http://www.onlamp.com/pub/a/php/2003/03/27/php_gd.html|installing_gd)