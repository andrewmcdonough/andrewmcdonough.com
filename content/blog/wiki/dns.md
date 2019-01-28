# DNS

The name server daemon in linux is called named.  It uses databases, often stored in /var/named/

When a server is the authority for a domain, it usually has a zone file in /var/named/.  These are normally call something like db.domain.com.  This zone file is then referenced in /etc/named.conf using an entry in the form:

  zone "domain.com" {
    type master;
    file "db.domain.com";
    allow-transfer {195.8.69.9; 217.158.169.7; 195.8.69.12; 195.8.69.36; 127.0.0.1;};

  }


## Name server settings
The name server is specified in /etc/resolv.conf


## DIG
To find out the dns settings of a domain, use dig

  dig andrewmcdonough.co.uk
  dig -t mx andrewmcdonough.co.uk

## Root Name Servers
The root name servers are 13 servers distributed around the world and operated by nine different organisations.  They are called:

A.ROOT-SERVERS.NET, B.ROOT-SERVERS.NET, ... , M.ROOT-SERVERS.NET

These represent one of the few single points of weekness in the internet and if all went down, the internet would be seriously disrupted.

A.ROOT-SERVERS.NET is the primary name server and makes the root zone file available to the 12 secondary root servers.  IANA controls changes of this file (which are typically made one or twice a week).

The root zone file describes the delegations of the top level domains.  

Zone files are transferred either by the a zone transfer (see RFC 1034) or by FTP.

Protocol limitations mean there can be at most 13 servers.