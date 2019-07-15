# Authors

## DDL

```sql
CREATE TABLE paths__authors (
  id         INTEGER PRIMARY KEY, -- primary key
  creator    TEXT, -- automatically filled by the RDBMS with the current user id
  name       TEXT, --
  copticname TEXT, --
  greekname  TEXT, --
  viaf       TEXT, --
  title      TEXT, -- vocabularies.def = 'titles'
  bio        TEXT, --
  cmclname   TEXT, --
  birth      INTEGER, --
  death      INTEGER, --
  episcopalsee INTEGER, -- places.id
  editors    VARCHAR(255), -- semi-colon-separated-values: vocabularies.def = 'persons'
  status     VARCHAR(255) -- vocabularies.def = 'status'

);
```

## Links
- `author` — `places` (via `episcopalsee`)
- `author` >—< `biblio` (via `m_biblio` [+ details])
- `author` >—< `works` (via `m_wkauthor` [+ type])
- `author` — `places`
