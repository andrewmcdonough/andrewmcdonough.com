# Restful Authentication

[http://techno-weenie.net|Rick Olsen](/wiki/http://techno-weenie.net|rick_olsen)'s restful authentication is my current preferred method for authenticating users.

## Installation

Add Rick Olsen's repository
  ruby script/plugin source http://svn.techno-weenie.net/projects/plugins

Install the resful_authentication plugin
  ruby script/plugin install restful_authentication

Generate the 
  ruby script/generate authenticated user sessions --include-activation

Create the tables in the database
  rake db:migrate

Add the following routes to config/routes.rb
  map.activate '/activate/:activation_code', :controller => 'users', :action => 'activate', :activation_code => nil
  map.signup '/signup', :controller => 'users', :action => 'new'
  map.login '/login', :controller => 'sessions', :action => 'new'
  map.logout '/logout', :controller => 'sessions', :action => 'destroy'

Now for any controllers to which you want to restrict access, add the following line:
  before_filter :login_required