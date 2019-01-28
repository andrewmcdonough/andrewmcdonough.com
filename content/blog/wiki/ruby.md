====== Ruby ======

Ruby is an object oriented scripting language.  Ruby is of particular interest because of the popular framework [[Ruby on Rails]]

==== Getting Started ====
=== Command line ruby ===
  irb --simple-prompt

=== Documentation ===
  ri ClassName
  ri ClassName#method_name

=== Command line arguments ===
Use the ARGV array:
  ARGV[0]

=== User input ===
  invar = gets
  # Getting rid of the newline
  invar.chomp


==== Syntax ====

=== Code Blocks ===
Blocks of code can either be defined using curly brackets {}, or on multiple lines using the end keyword to terminate the block e.g.

  def something
    ...
   end


=== Long lines ===
continue them with a backslash \

=== Naming Conventions ===
  * Variables start with a lower case letter
  * Constants start with an upper case letter.  They are usually all upper case
  * Classes are capitalized


==== Control Flow ====
=== Conditionals ===
  if myvar == "something"
    ..
  elsif myvar == "somethingelse"
    ..
  else
    ..
  end

=== Basic Loops ===
  10.times do
    puts "hello"
  end

=== While loops ===
  while condition 
    ..
  end

==== Strings ====

=== String comparisons ===
== !- < > <= >=

=== Expression Substitution ===

Inside a quoted string, use curly braces and a hash e.g.
  "This is a string with some #{variable} in it.


=== String Formatting ===
Use a template with a %s symbol, then you can reuse it later:
  template = "This is a template where %s will be substituted"
  puts template % "subsituted string"

Or with multiple substitutions:
  template = "There are multiple strings here like %s and %s"
  puts template % ["one","two"]

=== String Functions ===
^ Operation        ^ Syntax ^ Result ^
^ Assignment       | s = "Andrew McDonough | "Andrew McDonough" |
^ Length           | s.length              | "16"               |
^ Reversing        | s.reverse             | "hguonoDcM werdnA" |
^ Substring        | s.slice(2,4)          | "drew"             |
^ Substitution     | s.gsub(/n/,'z')       | "Azdrew McDozough"  |
^ Split into Array | s.split(" ")          | ["Andrew", "McDonough"] |


==== Arrays ====

=== Array Creation ===
  array_name = ["first", "second", "third"]
  array_name = %w("one two three four five")
  array_name[4] = "forth"
=== Array Functions ====
  array_name.length
  array_name.reverse
  array_name.sort
  array_name.include? element
+ - * operators for joining, difference and repeating

=== Multi-dimensional Arrays ===
  multi_array = [[1,"one"],[2,"two"]]

=== Iterators ===
  array_name.each do |element|
    ...
  end
==== Hashes ====
=== Hash Creation ===
  hash_name = {
    "key1" => "value1",
    "key2" => "value2",
    "key3" => "value3",
  }

=== Iterating over Hashes ===
  hash_name.each do |key, value|
    ...
  end

==== Functions ====
=== Declaration ===
def some_function {  puts "print it!" }

=== eval ===
Similarly to other scripting languages, the eval command causes the interpreter to execute a string:
  eval "puts 'Hello World!'"


=== Blocks can be passed to functions ===
def some_function
  yield # where the code block is substituted
end

=== proc ====
You can convert a block to an object.  This preserves the current execution environment.  The object is known as a proc.  One way of doing this is using the lambda function.
  p = lambda { |somevar| puts "somevar" + somevar }
  p.call


==== Classes and Objects ====
=== Defining Classes ===
Defining Classes:
  class <ClassName>
    def initialize(somevar)
      @attrib =  attrib
    end
  end

=== Constructors ===
  c_instance = ClassName.new

=== Nil ===
The null object in Ruby is called nil

==== File Access ====

=== Iterating over a directory ===
  Dir.open("some/path/").each do |dir|
    next if ["..","."].include? dir # Skip . and ..
    puts dir # Or some other operation
  end

=== Checking a file exists ===
  FileTest.exist?(file_name)

=== Creating a directory (but only if it doesn't exist first) ===
  Dir.mkdir(directory_name) unless File.directory?(directory_name)

=== Writing to a file (a = append, w = write) ===
  file_handle = File.open("file_name", "a")
  file_handle.puts "some string"
  file_handle.close


==== TK ====
TK, the graphics toolkit that is normally used in [[TCL]] can also be called from Ruby
  require 'tk'
  app = TkRoot.new
  TkLabel.new(app) do
    text "Hellow World!"
  end
  Tk.mainloop




 