======Regular Expressions======

===== Matching multiple occurences of characters =====
^   Regexp     ^  Meaning ^
|  %%/ab*c/%%  |  Matches an a followed by zero or more b's, followed by c. Expressions are greedy--it will match as many as possible. Same as /ab{0,}c/. |
|  %%/ab+c/%%  |  Matches an a followed by one or more b's followed by c. Same as /ab{1,}c/.|
|  %%/ab?c/%%  |  Matches an a followed by an optional b followed by c Same as /ab{0,1}c/. This has a different meaning in Perl 5. In Perl 5, the expression: /ab*?c/matches an a followed by as few b's as possible (non-greedy).  |
|  %%/ab{3,5}c/%% | Matches an  a followed by between three and five occurrences of b, followed by a c

===== Matching the beginning and end of a line or string =====
When placed a the beginning of a regexp, the //caret// **(^)** will only match the pattern if it occurs starting at the beginning of the line or string.
When placed a the end of a regexp, the //dollar/ **($)** will only match the pattern if it occurs finishing at the end of the line or string.

e.g. %%s/[^\.]$/\./g%% would look for lines that don't end in a full stop, and place one there.


===== Character Classes =====
Sets of characters can be matched by containing the valid set inside square brackets.
e.g.  %%[aeiou]%% would match all vowels.

The set can be negated by prefixing with a caret 
e.g. %%[^<>]%% matches all characters except the greater than and less than sign.

===== Shorthand Character Classes =====
^ Short version ^ Long version ^ Meaning                            ^
| \d            | %%[0-9]%%    | Matches a digit                    |
| \D            | %%[^0-9]%%   | Matches a non digit                |
| \w            | %%[A-Za-z]%% | Matches a letter                   |
| \W            | %%[^A-Za-z]%%| Matches a non letter               |
| \s            | %%[ \t\n\r]%%| Matches a whitespace character     |
| \S            | %%[^0-9]%%   | Matches a non whitespace character |

Shorthand characters can be used i


===== Useful Regular expressions for Vim =====
Change pipe (|) delimited data, as copied from a MySQL console into tab delimited data so it may be pasted into Excel:
  :%s/[ ]*|[ ]*/\t/g