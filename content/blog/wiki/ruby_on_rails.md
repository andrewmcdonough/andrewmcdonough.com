====== Ruby on Rails ======
Ruby on Rails is a web framework that has turned the IT industry on its head.  It is an opinionated framework, which follows serveral important rules:

  * **Convention over configuration** - Rather than spending your life configuring the framework by writing tons of XML, Rails encourages you to follow the convention.  You might not necessarily agree with its way of doing things (e.g. pluralised table names and database field naming conventions) but you will save yourself a lot of extra work by just accepting the standard.
  * **DRY** - Don't repeat yourself.  If you find yourself doing the same thing over and over again, there's probably a better way.

===== Turning off Pluralised Table Names =====
When I first started programming in Rails, one thing that hit a sore spot with me was its insistence on pluralised table names.  I still disagree with this convention in principal, but after having written a lot more Rails web applications, I now strongly believe that the best approach is to just go along with the convention.  If you really are more stubborn than I am, and you insist on using singular table names, then just put the following in environment.rb

  Rails::Initializer.run do |config|
  ...
    config.active_record.pluralize_table_names = false
  ...
  end

I would really recommend against doing this.  The only reason situation I can think of where it really would make your life easier, is if you are trying to port a legacy database that used singular table names, although even then, the pain you go through in migrating it will probably be worth it in the long term.