# gcc



Fedora 4 core ships with an unsupported version of gcc (2.96).  mplayer will not work with this version.  To change the version

  - Download appropriate version from http://gcc.gnu.org
  - tar -xvzf gcc-xxx.tar.gz
  - mkdir /usr/local/gnu
  - su
  - cd gcc-xxx
  - ./configure --prefix=/usr/local/gnu/gccxxx
  - make 
  - make install
  - ln -s /usr/local/gccxxx/bin/gxx /usr/local/bin/bcc
  - ln -s /usr/local/gccxxx/bin/gcc /usr/bin/gccxxx