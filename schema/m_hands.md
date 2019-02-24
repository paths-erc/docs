# m_hands

`m_hands` adds information about writing hand to table `Manuscripts`

## DDL

```sql
CREATE TABLE paths__m_hands (
    id              INTEGER PRIMARY KEY, -- primary key
    table_link      TEXT, -- dynamic foreign key, combined with id_link
    id_link         TEXT, -- dynamic foreign key, combined with table_link
    handno          INTEGER,
    modulartypology TEXT,
    writingaxis     TEXT,
    thickandthin    TEXT,
    writingnotes    TEXT
);

```

## Links
- `Manuscripts` -< `m_hands`
