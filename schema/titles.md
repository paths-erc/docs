# Titles

## DDL

```sql
CREATE TABLE paths__titles (
  id              INTEGER PRIMARY KEY, -- primary key
  creator         TEXT, -- automatically filled by the RDBMS with the current user id
  cc              TEXT,
  workcc          TEXT REFERENCES paths__works (cmcl), -- foreign key: works.cmcl,
  msid            TEXT REFERENCES paths__manuscripts (id), -- foreign key: works.cmcl,
  type            TEXT,  -- vocabularies.def = 'title_type'
  description     TEXT,
  modulartypology TEXT,  -- vocabularies.def = 'modular_typology'
  writingaxis     TEXT,  -- vocabularies.def = 'axis'
  thickandthin    TEXT,  -- 1|0
  text            TEXT,
  translation     TEXT,
  taggedtext      TEXT,
  editors         VARCHAR(255), -- semi-colon-separated-values: vocabularies.def = 'persons'
  status         VARCHAR(255) -- vocabularies.def = 'status'
);
```

## Links
- `titles` >—< `biblio` ( via `m_biblio` [+ details])
- `titles` >—< `collections` (via `m_shelfmarks` [+ shelfmark, pp])
- `titles` >— `manuscripts`
- `titles` >— `works`
