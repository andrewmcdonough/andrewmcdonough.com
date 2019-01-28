====== Perl ======

==== Getting Input ====
my $myvar = <STDIN>;
chomp($myvar);

==== Command Line Arguments ====

  * @ARGV is initialised as the array of arguments
  * $#ARGV is the subscript of the last element

==== Executing Shell Commands ====
Backticks are used to execute commands and return the input to the perl script e.g.
  $result = `$command`;
exec is used to launch a command when the output is to be directed to STDOUT e.g.
  exec $command;



====== Examples ======
=== A Perl Script to find possible matches for a file and open choice of match in Vim ===
  #!/usr/bin/perl
  my $file = $ARGV[0];
  my $locate = `locate $file`;
  my @matches = split("\n", $locate);
  my $i=1;
  foreach my $match (@matches) {
      print "($i) $match\n";
      $i++;
  }
  my $choice = <STDIN> || 1;
  chomp($choice);
  my $toOpen = $matches[$choice-1];
  $command =  "vi $toOpen";
  exec $command;


===== Bibliography =====

http://www.comp.leeds.ac.uk/Perl/start.html