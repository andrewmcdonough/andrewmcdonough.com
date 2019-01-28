# sed

sed is a stream editor.  It takes input from a file, processes it, and outputs to STDOUT:


Substitutions:
  sed -e 's/Andrew/Andy/' -e 's/McDonough/Donut/' file

Read somefile and substitute all occurrences of somexpession with a replacement
  cat somefile.file | sed s/someexpression/replacement/

Find all words ending in the letters de in the word list, remove the de and print to the screen.
  grep -ri ".*de$" /usr/share/dict/linux.words | sed s/..$//