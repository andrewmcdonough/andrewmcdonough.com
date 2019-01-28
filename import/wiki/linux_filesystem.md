====== Linux Filesystems ======

Finding available disks: 
  fdisk -l

Mounting partitions:
Devices are found in /dev and are often mounted into 'mount points' in the /mnt directory using the mount command:

  mount -t <type of filesystem> <device> <mount point>
e.g.
  mount /dev/hda1 /mnt/hda1
  mount -t ntfs /dev/hdb1 /mnt/hdb1
  mount -t smb -o username=someuser,password=somepassword //192.168.0.13/path /mnt/something

smb mounts are windows network mounts


===== Managing Disk Space =====

df - displays disk information\\
du - show disk use of a directory.  du -s recurses though subdirectories\\

du -s -k * | sort -n