===== bash =====

===== Header =====

  #!/bin/bash

===== Variables =====
Assignment
  X="hello"
note that there should be no space on either side of the equals sign
Referring to
  echo $X

===== Conditionals =====
  if [ condition ]
  then
    statements
  else
    more statements
  fi


===== Operators =====


^ Operator ^ Meaning ^
| -eq      | Integer equality |
| -neq     | Integer inequality |
| -lt      | Integer less than |
| -le      | Integer less than or equal to |
| -gt      | Integer greater than |
| -ge      | Integer greater than or equal to |
| =        | String equality |
| !=       | String Inequality |
| -n       | Non empty string |
| -z       | Empty string |
| -d       | Directory existence test |
| -f       | File existence test |


===== Iteration =====

Iterate over files and print their names:
  for i in $(ls); do echo $i; done

Iterate over .zip files and extract them
  for i in $(ls *.zip); do unzip $i; done




 ===== Examples =====

Accepting input
The following bash script accepts a parameter or prompts for the value if it is not supplied.  For the sake of the example, it simply echos this to STDOUT

  #!/bin/bash
  MYVAR=""
  if [ -z $1 ]
    then
      echo Enter a value:
        read MYVAR
      else
        MYVAR=$1
  fi
  echo $MYVAR



===== Useful Links =====

  * http://www.cyberciti.biz/faq/bash-for-loop/