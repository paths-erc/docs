# Authors

## DDL
```SQL
CREATE TABLE paths__authors (
  id         INTEGER PRIMARY KEY, -- chiave primaria
  creator    TEXT, -- compilato dal sistema con l'utente attivo
  name       TEXT, --
  copticname TEXT, --
  greekname  TEXT, --
  viaf       TEXT, --
  title      TEXT, -- vocabularies.def = 'titles'
  bio        TEXT, --
  cmclname   TEXT, --
  birth      INTEGER, --
  death      INTEGER, --
  editors    TEXT -- scsv: vocabularies.def = 'persons'
);
```

## Links
- `author` >—< `biblio` (via `m_biblio` [+ details])
- `author` >—< `works` (via `m_wkauthor` [+ type])
