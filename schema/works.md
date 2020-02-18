# Works

## DDL
```sql
CREATE TABLE paths__works (
  id              INTEGER PRIMARY KEY, -- primary key
  creator         TEXT, -- automatically filled by the RDBMS with the current user id
  cmcl            TEXT,
  title           TEXT,
  cpg             TEXT,
  cant            TEXT,
  cavt            TEXT,
  bho             TEXT,
  bhg             TEXT,
  bhl             TEXT,
  cae             TEXT,
  notes           TEXT,
  litperiod       TEXT,
  editors         VARCHAR (255), -- semi-colon-separated-values: vocabularies.def = 'persons'
  status          VARCHAR(255), -- vocabularies.def = 'status'
  lastmodified    TEXT
);
```

## Links
- `works` >—< `biblio` ( via `m_biblio` [+ details])
- `works` >—< `author` (via `m_wkauthor` [+ type])
- `works` >—< `manuscripts` (via `paths__userlinks`)
- `works` —< `titles`
