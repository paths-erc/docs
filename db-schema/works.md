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
  period          TEXT,  -- CMCL legacy semi-colon-separated-values vocabularies.def = 'period'
  problems        TEXT,  -- CMCL legacy
  shelfmarks      TEXT,  -- CMCL legacy
  notes           TEXT,
  litperiod       TEXT,
  editors         VARCHAR (255), -- semi-colon-separated-values: vocabularies.def = 'persons'
  status          VARCHAR(255) -- vocabularies.def = 'status'
);
```

## Links
- `works` >—< `biblio` ( via `m_biblio` [+ details])
- `works` >—< `author` (via `m_wkauthor` [+ type])
- `works` >—< `manuscripts` (via `paths__userlinks`)
- `works` —< `titles`
