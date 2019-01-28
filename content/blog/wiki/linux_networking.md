# Linux Networking

## Monitoring
with [netstat](/wiki/netstat) :
netstat -a | grep LISTEN


## Network Configuration
In Debian the network settings are specified in /etc/network/interfaces
In Redhat and Mandrake, this is found in /etc/sysconfig/network
A network configuration file looks like this:
  NETWORKING=yes
  HOSTNAME=p15145407.pureserver.info
  GATEWAY=192.158.254.1 # Optional - only used if pc isn't connected directly to the internet

In Fedora/Redhat, on machines with a static IP address, this is set in /etc/sysconfig/network-scripts/ifcfg-eth0  e.g.
  ...
  IPADDR=192.168.254.14
  NETMASK=255.255.255.0
  NETWORK=192.168.254.0
  ...
The name server is specified in a separate file, usually **/etc/resolv.conf**
### Starting a network device
  ifconfig <device> <ip> netmask <netmask> up
  e.g. ifconfig eth0 192.168.0.1 255.255.255.0 up

### Stopping a network device
  ifconfig eth0 down

Setting the dafault gateway
You also may need to check the gateway is setup:
  route add default gw <gateway ip>

And the network interface is configured:
  ifconfig eth0 192.168.254.9 netmask 255.255.255.0 up



## Name Servers
Name Servers are specified in
/etc/resolv.conf 
you must restart the name daemon to take effect (e.g. kill the process then /usr/local/sbin/named -u named)



http://yolinux.com/TUTORIALS/LinuxTutorialNetworking.html

http://www.nobell.org/~gjm/linux/gateway/