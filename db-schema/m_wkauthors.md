# m_wkauthors

`m_wkauthors` is a junction table that servers the purpose of linking one or more records
of any table `Works` to one or more records of table `Authors`

## DDL

```sql
CREATE TABLE paths__m_wkauthors (
  id         INTEGER PRIMARY KEY, -- primary key
  table_link TEXT, -- legacy field
  id_link    INTEGER REFERENCES paths__works (id), -- foreign key referring works.id
  id         INTEGER PRIMARY KEY,
  table_link TEXT,
  id_link    INTEGER REFERENCES paths__works (id), -- foreign key referring works.id
  type       TEXT,
  author     INTEGER REFERENCES paths__authors (id), -- foreign key referring authors.id
  source     TEXT,
  notes      TEXT,
  sort       INTEGER
);
```

## Links
- `Works` —< `m_wkauthors` >— `Authors`
