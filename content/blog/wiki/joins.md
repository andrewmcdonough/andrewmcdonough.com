# Oracle Joins

The Oracle outer join changed between versions 8i and 9i:

### 8i
  SELECT p.name, o.name
  FROM person p, organisation o 
  WHERE p.organisation_id = o.id (+)


### 9i
  SELECT p.name, o.name
  FROM person p
  LEFT OUTER JOIN organisation o
  ON p.organisation_id = o.id

### Multiple Outer Joins

It is possible to do an outer join on more that one table.  Example:
  SELECT
    O.ID,
    O.NAME
    A.ADDRESS AS ADDRESS,
    A.CITY,
    A.POST_CODE,
    COUNTRY.NAME AS COUNTRY,
    COUNTY.NAME AS COUNTY,
    A.POST_CODE AS POST_CODE, 
  FROM
    ORGANISATION O,
    ADDRESS A,
    LOOKUP COUNTRY,
    LOOKUP COUNTY
  WHERE 
    O.ID = A.ORGANISATION_ID (+)
    AND A.COUNTRY_ID = COUNTRY.ID (+)
    AND A.COUNTY_ID = COUNTY.ID (+)
    AND O.ID=33