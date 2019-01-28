The version of tomcat to use is in C:\JAVA\jakarta-tomcat-5.0.28.  Start it up using .\bin\startup.bat

 /etc/skel


usermod -G oracle nobody
groups user-id




Setup

CMD:
maven eclipse

Eclipse:
File->Import->Existing Project->
c:\java\projects\admin





select b.cid, o.name, o.head, o.address, o.post, o.category, o.borough, count(*) from booking b left join organisation o on o.id = b.cid group by b.cid


XDoclet Plugin  Hibernate with maven