# m_nameforms

`m_nameforms` servers the purpose of adding to each record of table `Persons`,
one or more alternative name form attestations

## DDL

```sql
CREATE TABLE paths__m_nameforms (
    id              INTEGER PRIMARY KEY, -- primary key
    table_link      TEXT, -- dynamic foreign key, combined with id_link
    id_link         INTEGER, -- dynamic foreign key, combined with table_link
    nameform        TEXT,
    language        TEXT,
    transliteration TEXT
);
```

## Links
- `Persons` —< `m_nameforms`
