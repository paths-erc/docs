# m_toponyms

`m_toponyms` servers the purpose of adding to each record of table `Places`,
one or more toponyms

## DDL

```sql
CREATE TABLE paths__m_toponyms (
  id               INTEGER PRIMARY KEY, -- primary key
  table_link       TEXT, -- dynamic foreign key, combined with id_link
  id_link          INTEGER, -- dynamic foreign key, combined with table_link
  toponym          TEXT,
  language         TEXT,
  transcription    TEXT,
  reference        TEXT,
  referencedetails TEXT,
  datefrom         TEXT,
  dateto           TEXT
);
```

## Links
- `Manuscripts` —< `m_toponyms`
