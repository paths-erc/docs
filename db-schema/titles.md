# Titles

## DDL
```sql
CREATE TABLE paths__titles (
  id              INTEGER PRIMARY KEY, -- chiave primaria
  creator         TEXT, -- compilato dal sistema con l'utente attivo
  cc              TEXT,
  workcc          TEXT REFERENCES paths__works (cmcl), -- FK: works.cmcl,
  msid            TEXT REFERENCES paths__manuscripts (id), -- FK: works.cmcl,
  type            TEXT,  -- vocabularies.def = 'title_type'
  description     TEXT,
  columns         TEXT,
  modulartypology TEXT,  -- vocabularies.def = 'modular_typology'
  writingaxis     TEXT,  -- vocabularies.def = 'axis'
  thickandthin    TEXT,  -- 1|0
  text            TEXT,
  translation     TEXT,
  taggedtext      TEXT,
  editors         TEXT   -- scsv: vocabularies.def = 'persons'
);
```

## Links
- `titles` >—< `biblio` ( via `m_biblio` [+ details])
- `titles` >—< `collections` (via `m_shelfmarks` [+ shelfmark, pp])
- `titles` >— `manuscripts`
- `titles` >— `works`
