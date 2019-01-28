# Tcl
## Syntax
### Variables
Tcl supports scalar variables and associative arrays.

Variables can be assigned and read using the **set** command.
  set s {This is a string}
  => This is a string
  set n 17
  => 17
  set s
  => This is a string

Associative Arrays

  set scores(Andrew) 95
  set scores(Geoff) 87

The dollar ($) symbol is used to reference a previously set variable
The expr keyword is used to mean evaluate and substitute.

  set totalScores 0
  for name (Andrew Geoff) {
    set totalScores [expr $totalScores + $scores($name)
  }



^ Java ^ Tcl ^
| i++ | incr i |
| i += 2 | incr i 2 |
| append s {Hello} | s += Hello |







### Arrays



### Control Flow

#### If
  if {$a > 5} {
    set a 0
  }

  if {$a == 0} {
    set a 1
  } elseif {$a == 1} {
    set a 2
  } else {
    set a 0
  }

Note that the start brace *must* appear on the same line as the if statement.


#### Loops

  foreach i $a {
  }

Initialiases i to each value of last a in turn.