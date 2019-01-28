====== SSH Tunneling ======

You can use an SSH connection to tunnel a connection on another port to a third sever on an internal network.  Chose an abitrary port e.g. 1234 


  ssh -L xxxx:<app server>:yyyy <username>@<ssh hostname>

e.g. you could use this to get access to your router's web interface:

  ssh -L 1234:192.168.0.1:80 root@<ssh hostname>

Once you have opened this connection, on your local computer go to:

  http://localhost:1234

and the page will open as if you were on your internal network.