# Places

## DDL

```sql
CREATE TABLE paths__places (
  id                  INTEGER PRIMARY KEY, -- primary key
  creator             TEXT, -- automatically filled by the RDBMS with the current user id
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
  area                TEXT, -- places.area
  meris               TEXT, -- places.meris
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
  hasmonastery        BOOLEAN, -- 1|0
  monasterynotes      TEXT,
  isnomoscapital      BOOLEAN, -- 1|0
  accuracy            TEXT,
  editors             VARCHAR(255), -- semi-colon-separated-values: vocabularies.def = 'persons'
  status              VARCHAR(255) -- vocabularies.def = 'status'

);
```

## Links
- `places` >—< `biblio` ( via `m_biblio` [+ details])
- `places` —< `m_placephase`
- `places` —< `manuscripts` (via `paths__m_msplaces` [+ type, source info, source note])
- `places` —< `geodata` (via `paths__geodata`)
- ...