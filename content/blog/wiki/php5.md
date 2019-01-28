# PHP5


## Autoloading objects

To save the hassle of requiring all modules, the autoload function can be used to load object libraries as they are needed:

  function __autoload($class_name) {
     require_once $class_name . '.class.php';
  }