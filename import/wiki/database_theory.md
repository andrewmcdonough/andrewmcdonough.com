====== Database Theory ======

===== ACID Properties =====
ACID Properties are the key properties of transaction processing within a database.  A transaction is usually a collection of one or more statements.
  * **Atomicity** - Transactions either occur (all queries commit) or don't (rolled back executed queries reversed).
  * **Consistency** - All constraints of the database must be satisfied before and after a transaction.
  * **Isolation** - The transaction should be carried out without any other process being able to see the intermediate state.
  * **Durability** - After a transaction has committed, it's effects should persist, even in the event of a database failure.

http://en.wikipedia.org/wiki/ACID

===== Normalization =====

http://en.wikipedia.org/wiki/Database_normalization