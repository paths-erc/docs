# m_msplaces

`m_msplaces` is a junction table that servers the purpose of linking one or more records
of any table `Manuscripts` to one or more records of table `Places`

## DDL

```sql
CREATE TABLE paths__m_msplaces (
  id          INTEGER PRIMARY KEY, -- primary key
  table_link  TEXT, -- dynamic foreign key, combined with id_link
  id_link     INTEGER, -- dynamic foreign key, combined with table_link
  type        TEXT,
  place       INTEGER,
  sourceinfo  TEXT,
  sourcenotes TEXT,
  sort        INTEGER
);
```

## Links
- `Manuscripts` >— `m_msplaces` -<  `Places`
