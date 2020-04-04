# m_nameforms

`m_nameforms` adds information about name variants to table `Persons`

## DDL

```sql
CREATE TABLE paths__m_nameforms (
    id              INTEGER PRIMARY KEY, -- primary key
    table_link      TEXT    NOT NULL, -- dynamic foreign key, combined with id_link
    id_link         INTEGER NOT NULL, -- dynamic foreign key, combined with table_link
    nameform        TEXT,
    language        TEXT,
    transliteration TEXT
);
```

## Links
- `Persons` -< `m_nameforms`
