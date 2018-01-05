# Places

## DDL
```sql
CREATE TABLE paths__places (
  id                  INTEGER PRIMARY KEY, -- chiave primaria
  creator             TEXT, -- compilato dal sistema con l'utente attivo
  name                TEXT,
  copticname          TEXT,
  greekname           TEXT,
  arabicname          TEXT,
  arabictranslname    TEXT,
  egyptianname        TEXT,
  tm                  TEXT,
  pleiades            TEXT,
  timm                TEXT,
  region              TEXT, -- vocabularies.def = 'dialects'
  area                TEXT, -- scsv vocabularies.def = 'area'
  nomos               TEXT, -- vocabularies.def = 'nomos'
  province            TEXT, -- vocabularies.def = 'provinces'
  episcopalsee        TEXT, -- 1|0
  episcopalseefrom    TEXT,
  notesepiscopalsee   TEXT,
  typology            TEXT, -- vocabularies.def = 'site_typology'
  toporeferredto      TEXT, -- places.id
  notestoporeferredto TEXT,
  historicalreference TEXT,
  datefrom            INTEGER,
  dateto              INTEGER,
  datingcriteria      TEXT,
  description         TEXT,
  hasplans            BOOLEAN, -- 1|0
  hasphotos           BOOLEAN, -- 1|0
  ismonastery         BOOLEAN, -- 1|0
  monasterynotes      TEXT,
  isnomoscapital      BOOLEAN, -- 1|0
  accuracy            TEXT,
  editors             TEXT   -- scsv: vocabularies.def = 'persons'
);
```

## Links
- `places` >—< `biblio` ( via `m_biblio` [+ details])
- `places` —< `m_placefase`
- `places` —< `manuscripts` (via `paths__m_msplaces` [+ type, source info, source note])
- `places` —< `geodata` (via `paths__geodata`)
- ...