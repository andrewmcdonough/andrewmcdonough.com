# Portsentry

## Installation

tar -xvzf portsentry-x.xx.tar.gz
cd portsentry-x.xx
make linux
make install

## Configuration

Configuration is via the portsentry.conf file.
  TCP_PORTS="list,of,ports,to,block,[..]"
  UDP_PORTS="list,of,ports,to,block,[..]"



  KILL_ROUTE="/usr/local/bin/iptables -I INPUT -s $TARGET$ -j DROP"





[http://linux.cudeso.be/linuxdoc/portsentry.php](/wiki/http://linux.cudeso.be/linuxdoc/portsentry.php)