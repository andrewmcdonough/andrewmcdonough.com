# Useful Linux Commands

## File System
Create a symbolic link:
  ln -s source target
List disk usage of directorys, but limit output to one level.  Show size (blocksize) in bytes:
  du --max-depth=1 --block-size=1
As above but sort by decending use:
  du --max-depth=1 --block-size=1 | sort -nr 
Show all printable strings in a binary file:
  strings  

## Network
Monitor network traffic:
  netstat -a 
### Memory
Use free command, to find the free memory, or use cat on /proc/meminfo.  The following command extracts the free memory and writes to a file called freememory with a timestamp.  Useful to add to cron, running every minute so you can check memory retrospectively:
  echo `date` - `free | tail -n 3 | head -n 1 | awk '{print $4}'`  >> freememory
## Services
Show services that run at the various levels:
  chkconfig --list
Show current runlevel:
  /sbin/runlevel