# Screen
Screen is a very useful UNIX utility that you can use to multiplex several terminals within a single window.  Before I started using it, I frequently lost the terminal window I wanted and had a bad habit of starting a new window everytime I wanted to do something new.  Now that I use **screen**, when I'm developing, I keep certain numbered terminals open so I can switch easily between them (Ctrl-A n).  For example, when I am developing an application in [Ruby on Rails](/wiki/ruby_on_rails), I use the following convention:

^ Ctrl-A n ^ Use ^
^ 0 | My server (WEBRick) |
^ 1 | Primary command line with [ssh-agent]] started and my [[subversion](/wiki/ssh-agent]]_started_and_my_[[subversion) key loaded |
^ 2 | Secondary command line |
^ 3 | MySQL command line |
^ 4 | tailed log (tail -f logs/development.log) |
^ 5 | [Rails console](/wiki/rails_console) (ruby script/console) |
^ 6 - 9 | General use depending on what I am doing |

By using screen, [gvim](/wiki/gvim) with multiple buffers and Firefox, I only really need three windows open at once.

## Commands I use most



Create a new screen
  Ctrl-a c

Switch to screen n
  Ctrl-a {n}

List Windows 
  Ctrl-a "

Name window
  Ctrl-a A

Kill window
  Ctrl-a K

Detach
  Ctrl-a d


Reattach
  screen -r

Reattach even if attached elsewhere
  screen -D -RR

Copy mode
  Ctrl-a [

Paste
  Ctrl-a ]

Split
  Ctrl-a S

Switch
  Ctrl-a <TAB>w

Full Screen
  Ctrl-a Q

Name a screen session
  screen -S <session_name>

## In copy mode

Scroll up
  Ctrl-u 

Scoll down
  Ctrl-d 

Select: <SPACE>