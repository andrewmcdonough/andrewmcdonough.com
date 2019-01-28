====== MySQL Indexing ======


===== Showing indicies =====

  show index from <table_name>;

===== Adding indices =====

  alter table <table_name> add index (<column_name>);

or if a text field. give a number of characters to index:
  alter table <table_name> add index (<column_name>(<no_chars>);


