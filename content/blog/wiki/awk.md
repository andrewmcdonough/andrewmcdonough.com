# awk
awk is a data processing tool that scans text one line at a time and checks for a match against one or more patterns (regular expresions).  If the line matches a patterns, some it is processed.

Command line syntax:
  awk <search pattern> {<program actions>}

e.g.
  awk '/192/ {print $1 $2}' access_log
prints first and second fields of access_log for lines containing 192

If the field separator is not a space, use
  awk -F<separator> '<command>' file

$0 is the entire line

An awk program is in the form:
   awk 'BEGIN              {<initializations>} 
        <search pattern 1> {<program actions>} 
        <search pattern 2> {<program actions>} 
        ...
        END                {<final actions>}'

The END keyword is processing to perform after processing all lines

  awk 'END {print NR," accesses"}' access_log

The NR keyword meand 'numer of records'

NF means 'number of fields'

## Command Line Syntax
  awk -F<ch>
uses <ch> as the separation character

you can specify variable values on the command line
  awk -f program.awk var1=5 var2=20 file.txt

## Syntax

you can tell a regexp to only match one particular field
$1 ~ /pattern/


  NR == 4
only matches line 4

##### 4, NR
matches lines 4-8

### Arrays
Arrays of both numerical indexes and associative arrays are supported
  arraya[3] = 4
  arrayb["andrew"] = "mcdonough"


## Examples
### Frequencies

To find frequencies ip addresses in a file (one ip per line)

  # Print list of word frequencies
  {
    for (i = 1; i <= NF; i++)
    freq[$i]++
  }
  END {
  for (ip in freq)
    printf "%s\t%d\n", ip, freq[ip]
  }
### Frequencies Part 2
The following will try to match a [Vignette](/wiki/vignette) curl in an IIS log, with the siteid 5034, get all of the requesting IP addresses, count the number of hits, pipe this into sort, returning the greatest number of requests first, and open it in less for easy viewing:

  awk '/,5034-/ {freq[$3]++} END { for (ip in freq)  printf "%d\t%s\n", freq[ip], ip }' ex060515.log | sort -nr |less
          ^       ^    ^             ^                          ^                           ^           ^          ^
          |       |    |             |                          |                           |           |          |
          |     hash   |      iterate over hash                 |                        logfile        |          |
          |            |                                        |                 sort numerically, decending      |
          |  req ip is third field            print count followed by ip                                           |
  pattern a is curl                                                                             less allows easy viewing


### Piping

You can pipe input of another command into awk.  For example to pipe ps into awk and extract the process name column:
  ps -awx | awk '{print $5}' 

  awk '/\w/' file
  returns all lines of the file with word characters


### Small Examples
To count how many ip addresses appear in the first field of access_log:
  awk '{freq[$1]++} END { for (ip in freq)  printf "%s\t%d\n", ip, freq[ip] }' access_log

To count as above, but then get the four highest occuring IP addresses
  awk '{freq[$1]++} END { for (ip in freq)  printf "%d\t%s\n",  freq[ip] ,ip }' access_log |sort -n |tail -n4

As above, but only get the IP addresses, not the count
  awk '{freq[$1]++} END { for (ip in freq)  printf "%d\t%s\n",  freq[ip] ,ip }' access_log |sort -n |tail -n4 | awk '{print $2}'
The utility md5sum computes the md5 hash of a given string.  However, it also returns the name of the file as a second field.  Get rid of this using awk:
  echo $PASSWORD |/usr/bin/md5sum | awk '{print $1}' 
In the httpd vhosts log directory, dump the log files to a text file, then sort it by file size, and open using less to show the biggest logs:
  cd /var/log/httpd/vhosts/
  ls -la > alllogs
  awk '// {printf "%s %s\n",$5,$9}' alllogs |sort -nr |less  