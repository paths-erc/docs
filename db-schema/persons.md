# Authors

## DDL

```sql
CREATE TABLE paths__persons (
    id         INTEGER       PRIMARY KEY,  -- primary key
    creator    TEXT,  -- automatically filled by the RDBMS with the current user id
    name       TEXT, --
    type       TEXT, -- vocabularies.def = 'persons_type'
    profession TEXT, -- vocabularies.def = 'profession'
    patronymic TEXT, --
    origin     TEXT, -- places.id
    sex        TEXT, -- vocabularies.def = 'sex'
    datefrom   INTEGER,
    dateto     INTEGER,
    datenotes  TEXT,
    editors    VARCHAR (255), -- semi-colon-separated-values: vocabularies.def = 'persons'
    status     VARCHAR (255) -- vocabularies.def = 'status'
);

```

## Links
- `persons` >—< `biblio` (via `m_biblio` [+ details])
