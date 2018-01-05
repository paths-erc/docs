# Colophons

## DDL
```sql
CREATE TABLE paths__colophons (
  id              INTEGER PRIMARY KEY, -- chiave primaria
  creator         TEXT, -- compilato dal sistema con l'utente attivo
  msid            TEXT REFERENCES paths__manuscripts (id), -- FK: manuscripts.id
  chronofrom      TEXT,
  chronoto        TEXT,
  datingcriteria  TEXT,
  dialect         TEXT, -- scsv: vocabularies.def = 'dialects'
  dialectnotes    TEXT,
  greektext       TEXT,
  writingaxis     TEXT, -- vocabularies.def = 'dialects'
  thickandthin    TEXT, -- 1|0
  cryptography    TEXT, -- 1|0
  minusculecopitc TEXT, -- 1|0
  minusculegreek  TEXT, -- 1|0
  description     TEXT,
  text            TEXT,
  translation     TEXT,
  taggedtext      TEXT,
  editors         TEXT  -- scsv: vocabularies.def = 'persons'
);
```

## Links
- `colophons` >—< `biblio` ( via `m_biblio` [+ details])
- `colophons` >—< `collections` (via `m_shelfmarks` [+ shelfmark, pp])
- `colophons` >— `manuscripts`
