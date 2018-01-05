# geodata

## DDL
```sql
CREATE TABLE paths__geodata (
  id           INTEGER PRIMARY KEY, -- chiave primaria
  table_link   TEXT, -- FK dinamico insieme a id_link
  id_link      INTEGER, -- KF dinamico insieme a table_link
  geometry     TEXT,
  geo_el_elips INTEGER,
  geo_el_asl   INTEGER
);
```

## Links
- `geodata` >—  `places`
