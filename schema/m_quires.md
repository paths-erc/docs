# m_quires

`m_quires` servers the purpose of adding to each record of table `Manuscripts`
one or more quire description

## DDL

```sql
CREATE TABLE paths__m_quires (
  id               INTEGER PRIMARY KEY, -- primary key
  table_link       TEXT, -- dynamic foreign key, combined with id_link
  id_link          INTEGER, -- dynamic foreign key, combined with table_link
  quireno          TEXT,
  quirelayout      TEXT,
  quirelayoutnotes TEXT,
  quirepaptype     TEXT,
  quirepartype     TEXT,
  quirenotes       TEXT
);
```

## Links
- `Manuscripts` —< `m_quires`
