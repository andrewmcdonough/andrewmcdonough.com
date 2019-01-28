## KDE Resolution Problem

I recently installed KDE on an old machine.  I accidentally selected a resolution the graphic card didn't support.  I fixed this by:


  * Booting into single user mode.  This is done in GRUB by hitting 'e' to edit the parameters and finding the one starting with 'kernel', hitting 'e' and puting the word 'single' at the end.
  * In this mode, I edited /etc/X11/xorg.conf and took out all the dodgy resolutions.
  * 'shutdown -r now' and I'm in!