# SMTP

SMTP is the standard protocol used to deliver email.

## How to send email via SMTP
In this example, I will demonstrate how to send an email to the email address someuser@andrewmcdonough.com

## Identifying the MX record for the domain

First, find the MX record for the domain you wish to send email to:

  $ dig -t mx andrewmcdonough.com

The reply should contain an **ANSWER SECTION**.  I use Google for my email, so I get:

  ;; ANSWER SECTION:
  andrewmcdonough.com.	86400	IN	MX	5 alt2.aspmx.l.google.com.
  andrewmcdonough.com.	86400	IN	MX	10 aspmx2.googlemail.com.
  andrewmcdonough.com.	86400	IN	MX	1 aspmx.l.google.com.
  andrewmcdonough.com.	86400	IN	MX	5 alt1.aspmx.l.google.com.
  
This shows there are four potential mail servers you can use to deliver email to this user.  The final column in this reply is the name of the server and the penultimate column is the priority.  Identify the one with the highest priority, in this case 1, which gives the mail server aspmx.l.google.com.

## Connecting to the mail server

You now need to connect to the mail server identified above on port 25.

  $ telnet aspmx.l.google.com 25
  Trying 209.85.219.32...
  Connected to aspmx.l.google.com.
  Escape character is '^]'.
  220 mx.google.com ESMTP 8si10731759ewy.109

Most servers like you to say **helo** first:
  helo yourdomain.com
If the mail server likes this, it should give a reply with code 250.  All replies with a code 250 are good.
  250 mx.google.com at your service

Now identify who the mail is from sing the **mail from** command.  Make sure you enclose the email address in angle brackets.
  mail from:<yourusername@yourdomain.com>
  250 2.1.0 OK 8si10731759ewy.10

And who you are trying to send mail to using the **rcpt to** command.  If you are trying to mail multiple people on this mail server, you can enter several of these:
  rcpt to:<someuser@andrewmcdonough.com>
  250 2.1.5 OK 8si10731759ewy.109

Now for the message, enter the command **data**.  You should get a reply with code 354:
  data
  354  Go ahead 8si10731759ewy.109

You can enter multiple lines.  When you are finished, place a full stop (period) on a line by itself.  If you want the email to have a subject, put this on the first line preceded by the word Subject and a colon:
  Subject: A Test Message
  Here is a message
  on multiple lines
  .

And again, you should get a positive reply.
  250 2.0.0 OK 1244025655 8si10731759ewy.109

That's it.  The email has been sucessfully sent.  You can now quit the session by using the **quit** command:
  quit
  221 2.0.0 closing connection 8si10778608ewy.61
  Connection closed by foreign host.