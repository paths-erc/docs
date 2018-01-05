# Works

## DDL
```sql
CREATE TABLE paths__works (
  id              INTEGER PRIMARY KEY, -- chiave primaria
  creator         TEXT, -- compilato dal sistema con l'utente attivo
  cmcl            TEXT,
  title           TEXT,
  cpg             TEXT,
  cant            TEXT,
  cavt            TEXT,
  bho             TEXT,
  bhg             TEXT,
  bhl             TEXT,
  cae             TEXT,
  period          TEXT,  -- CMCL legacy scsv vocabularies.def = 'period'
  problems        TEXT,  -- CMCL legacy
  shelfmarks      TEXT,  -- CMCL legacy
  notes           TEXT,
  litperiod       TEXT,
  editors         TEXT   -- scsv: vocabularies.def = 'persons'
);
```

## Links
- `works` >—< `biblio` ( via `m_biblio` [+ details])
- `works` >—< `author` (via `m_wkauthor` [+ type])
- `works` >—< `manuscripts` (via `paths__userlinks`)
- `works` —< `titles`
