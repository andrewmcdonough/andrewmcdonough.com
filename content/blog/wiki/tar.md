====== tar ======

tar is a unix utility used to archive a collection of files into an archive.  Usually the archive is zipped by gzip for efficient storage.  A tar archive is often referred to as a tarball

===== Creating a tarball =====
  tar -cvzf nameofarchive.tar.gz <list of files and directories to include>

===== Extracting a tarball =====
  tar -xvzf nameofarchive.tar.gz

===== Forcing symbolic links to be dereferences =====
The default behaviour for symbolic links is to archive them as the links to the appropriate part of the file system.  You can for a symbolic link to be substituted for a file by using the -h switch (or --dereference):
  tar -cvzfh nameofarchive.tar.gz <list of files and directories to include>