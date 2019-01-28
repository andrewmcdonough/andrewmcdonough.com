# yum - update manager

yum (Yellowdog Update, Modified)  is a package updater for Linux, based on rpm.  It is a rewrite of yup and is an alternative to apt-get, (Yellowdog UPdate)

  * Update all packages:
  yum update 

  * Install a package
  yum install packagename
  yum install packagename.x86_64

  * Remove a package:
  yum remove packagename

  * List Packages
  yum list "*package*"

### Settind up third party repositories 
Download repository definitions to /etc/yum.depos.d/

e.g.
  /etc/yum.depos.d/
  wget http://wilsonet.com/mythtv/atrpms.repo
  wget http://wilsonet.com/mythtv/freshrpms.repo 