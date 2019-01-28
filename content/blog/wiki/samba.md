# Samba

Samba is a UNIX tool used to share Unix directories on a Windows Network, or access Windows shares from a UNIX Network.

## Mounting a Windows Share on a Linux FS
You will need to install the samba client on machines where you want to access shares:
  yum -y install samba-client
Now mount the shared directory
  smbmount -o username=prodadmin,password=secret //xxx.xxx.xxx.xxx/home/prodadmin


## Setting up a Linux Directory as Windows Share
## Adding users


## Basic configuration with smb.conf
  * Most of samba's configuration is done through smb.conf.  On Fedora, this is found in /etc/samba/smb.conf
  * For basic configuration, change the workgroup name, and add a netbios name so the server can be identified by name:

  # workgroup = NT-Domain-Name or Workgroup-Name
    workgroup = sportcentric
  # Netbios name
    netbios name = WOLF