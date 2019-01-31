---
title: Colorized Logs in Ruby
date: '2009-10-31T08:54:34Z'
---

## Update (2019)

I wrote this post in 2009. In 2019 I believe my approach is a terrible idea. Adding methods to Ruby's core classes (like String) is asking for trouble.

---

The <a href="http://www.ruby-doc.org/stdlib/libdoc/logger/rdoc/" target="_new">logger</a> is a really useful way to tell what is going on in your ruby application, but in <a href="http://rubyonrails.org/" target="_n
ew">Rails</a>, it can be difficult to spot your own log entries when they are mixed up with all the <a href="http://api.rubyonrails.org/classes/ActiveRecord/Base.html" target="_new">ActiveRecord</a> and <a href="http://api.rubyonrails.org
/classes/ActionController/Base.html" target="_new">ActionController</a> ones.  One way of making your own comments stand out is to use color in your logs.  You have probably noticed that Rails does this already to make the logs more reada
ble, and the effect is fairly easy to replicate yourself.  Color in the terminal is achieved using <a href="http://en.wikipedia.org/wiki/ANSI_escape_code" target="_new">ANSI escape codes</a>, a series of characters to tell the terminal to
 print the enclosed string in a particular color and style.  You could just include this in your logs yourself, but this ends up looking a bit messy.  To solve this, I extended <em>String</em> to include a method called <strong>colorize</strong>.  It takes a color  ("gray","red", "green", "yellow", "blue", "magenta", "cyan","white") and a few other optional parameters for styling.

<a class="filename" href="/files/colorize.rb" target="_new">colorize.rb:</a>

```ruby
class String
  def colorize(color, options = {})
    background = options[:background] || options[:bg] || false
    style = options[:style]
    offsets = ["gray","red", "green", "yellow", "blue", "magenta", "cyan","white"]
    styles = ["normal","bold","dark","italic","underline","xx","xx","underline","xx","strikethrough"]
    start = background ? 40 : 30
    color_code = start + (offsets.index(color) || 8)
    style_code = styles.index(style) || 0
    "\e[#{style_code};#{color_code}m#{self}\e[0m"
  end
end
```


Here are some examples of colorize in action:
<pre class="terminal" style="color:white; background-color:#333; padding:10px;">&gt; irb
irb(main):001:0&gt; require 'colorize'
irb(main):002:0&gt; s = "Some text"
irb(main):003:0&gt; puts s.colorize "red"
<span style="color:red">Some text</span>
irb(main):004:0&gt; puts s.colorize "green", :bg =&gt; true
<span style="background-color:green; color:white">Some text</span>
irb(main):005:0&gt; puts s.colorize "blue", :style =&gt; "underline"
<span style="color: blue; text-decoration: underline;">Some text</span>
irb(main):006:0&gt; puts s.colorize "magenta", :style =&gt; "bold"
<span style="color:magenta; font-weight:bold;">Some text</span>
irb(main):007:0&gt; puts s.colorize "cyan", :style =&gt; "strikethrough"
<span style="color:cyan; text-decoration:lkine-through">Some text</span>
irb(main):008:0&gt; puts s.colorize "yellow", :style =&gt; "dark"
<span style="color:#999900">Some text</span></pre>

To include this in your Rails app, and use it with the debugger, just put the code in a place where it will be loaded.  My method of doing this is to drop colorize.rb into your application's /lib directory, then add the following line toe
nvironment.rb

```ruby
require File.join(File.dirname(__FILE__), '../lib/colorize')
```

Reload the server, then you will be able to add color to your logs e.g.

```ruby
logger.debug("This is a message for debugging".colorize("red"))
```

As well as using colorize in logs, you can also use it in any script that runs on the command line.  Uses for this might include test reporting, installation scripts, sysadmin script reporting and others.
