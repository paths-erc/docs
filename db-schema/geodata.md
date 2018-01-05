# geodata

## DDL

```sql
CREATE TABLE paths__geodata (
  id           INTEGER PRIMARY KEY, -- primary key
  table_link   TEXT, -- dynamic foreign key, combined with id_link
  id_link      INTEGER, -- dynamic foreign key, combined with table_link
  geometry     TEXT,
  geo_el_elips INTEGER,
  geo_el_asl   INTEGER
);
```

## Links
- `geodata` >—  `places`
