====== iptables ======


  iptables -I INPUT -s xxx.xxx.xxx.xxx -j DROP

insert (-i) into chain INPUT with source (-s) ip xxx.xxx.xxx.xxx and jump (-j) to target DROP


  iptables -L INPUT

List the entries in the INPUT chain


  iptables -F INPUT

Flush the INPUT chain


  iptables -L -n**

List by IP address

  iptables-save > /etc/iptables.conf
Saves

  iptables-restore < /etc/iptables.conf
Restores

===== Using as a firewall =====

use the output chain to drop all requests on port 80
  -A OUTPUT -p tcp -m tcp --dport 80 -j DROP
  -A OUTPUT -p tcp -m tcp --dport 443 -j DROP

then accept ips that you want
  -A OUTPUT -s 217.158.112.246 -d 212.118.245.130 -p tcp -m tcp --dport 80 -j ACCEPT

Adding on command line
  iptables -I OUTPUT -s 217.158.112.246 -d destinationIP -p tcp --dport 80 -j ACCEPT

