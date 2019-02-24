# m_biblio

`m_biblio` is a junction table that servers the purpose of linking one or more records
of any other table to one or more records of table `Bibliography`

## DDL

```sql
CREATE TABLE paths__m_biblio (
  id         INTEGER PRIMARY KEY, -- primary key
  table_link TEXT, -- dynamic foreign key, combined with id_link
  id_link    INTEGER, -- dynamic foreign key, combined with table_link
  short      TEXT,
  details    TEXT,
  images     TEXT
);
```

## Links
- `Bibliographic database` >— `m_biblio` -<  `Authors`
- `Bibliographic database` >— `m_biblio` -<  `Collections`
- `Bibliographic database` >— `m_biblio` -<  `Colophons`
- `Bibliographic database` >— `m_biblio` -<  `Files`
- `Bibliographic database` >— `m_biblio` -<  `Manuscripts`
- `Bibliographic database` >— `m_biblio` -<  `Places`
- `Bibliographic database` >— `m_biblio` -<  `Titles`
- `Bibliographic database` >— `m_biblio` -<  `Works`
