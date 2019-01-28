====== Oracle Sequences ======
Oracle sequences are held in a special table and are created using the syntax:

  CREATE SEQUENCE <SCHEMA>.<NAME>
  START WITH <START NO>
  INCREMENT BY <INCEMENT, USUALLY 1>
  MINVALUE <MIN VAL, USUALLY 1>
  MAXVALUE <MAX VAL, USUALLY LARGE>
  CACHE 20
  NOCYCLE 
  NOORDER 

e.g.

  CREATE SEQUENCE BASE.AUTH_SEQ
  START WITH 4
  INCREMENT BY 1
  MINVALUE 1
  MAXVALUE 99999999999999999999
  CACHE 20
  NOCYCLE 
  NOORDER 

===== Generating Sequence=====

  SELECT 'CREATE SEQUENCE '|| TABLE_NAME || '_SEQ' || ' START WITH 4 INCREMENT BY 1 MINVALUE 1 MAXVALUE 99999999999999999999 CACHE 20 NOCYCLE NOORDER ;'
  FROM ALL_TABLES WHERE OWNER = '<SCHEMA NAME>'

e.g.

 SELECT 'CREATE SEQUENCE '|| TABLE_NAME || '_SEQ' || ' START WITH 4 INCREMENT BY 1 MINVALUE 1 MAXVALUE 99999999999999999999 CACHE 20 NOCYCLE NOORDER ;'
 FROM ALL_TABLES WHERE OWNER = 'BASE'



  INSERT INTO person (id, name) values (select person_seq.nextval, "chappy" from dual);





