# m_placephase

`m_placephase` servers of adding to each record of table `Places` one or more
chronological phase description

## DDL

```sql
CREATE TABLE paths__m_placephase (
  id            INTEGER PRIMARY KEY, -- primary key
  table_link    TEXT, -- dynamic foreign key, combined with id_link
  id_link       INTEGER, -- dynamic foreign key, combined with table_link
  phperiod      TEXT,
  phperiodnote  TEXT,
  phtypology    TEXT,
  phdescription TEXT
);
```

## Links
- `Places` —< `m_placephase`
