# m_shelfmarks

`m_shelfmarks` servers the purpose of adding to each record of table `Manuscripts`,
`Titles` and `Colophons` one or more reference to a shelfmark ID

## DDL

```sql
CREATE TABLE paths__m_shelfmarks (
  id          INTEGER PRIMARY KEY, -- primary key
  table_link  TEXT, -- dynamic foreign key, combined with id_link
  id_link     INTEGER, -- dynamic foreign key, combined with table_link
  fullsegnat  TEXT,
  segnatid    TEXT,
  collection  TEXT,
  shelfmark   TEXT,
  pp          TEXT,
  sort        INTEGER
);
```

## Links
- `Manuscripts` —< `m_shelfmarks`
- `Titles` —< `m_shelfmarks`
- `Colophons` —< `m_shelfmarks`
