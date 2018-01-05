# Colophons

## DDL

```sql
CREATE TABLE paths__colophons (
  id              INTEGER PRIMARY KEY, -- primary key
  creator         TEXT, -- automatically filled by the RDBMS with the current user id
  msid            TEXT REFERENCES paths__manuscripts (id), -- foreign key: manuscripts.id
  chronofrom      TEXT,
  chronoto        TEXT,
  datingcriteria  TEXT,
  dialect         TEXT, -- semi-colon-separated-values: vocabularies.def = 'dialects'
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
  editors         TEXT -- semi-colon-separated-values: vocabularies.def = 'persons'
);
```

## Links
- `colophons` >—< `biblio` ( via `m_biblio` [+ details])
- `colophons` >—< `collections` (via `m_shelfmarks` [+ shelfmark, pp])
- `colophons` >— `manuscripts`
