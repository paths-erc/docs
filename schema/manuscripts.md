# Manuscripts

## DDL

```sql
CREATE TABLE paths__manuscripts (
  id               INTEGER PRIMARY KEY, -- primary key
  creator          TEXT, -- automatically filled by the RDBMS with the current user id
  cmclid           TEXT,
  tm               TEXT,
  ldab             TEXT,
  lcbm             TEXT,
  alias            TEXT,
  issinglefrag     TEXT, -- 1|0
  isbookbinding    TEXT, -- 1|0
  stratigraphy     TEXT,
  modernhistory    TEXT,
  contents         TEXT,
  dialect          TEXT, -- vocabularies.def = 'dialects'
  dialectnotes     TEXT,
  chronofrom       INTEGER,
  chronoto         INTEGER,
  datingcriteria   TEXT,
  bookform         TEXT, -- vocabularies.def = 'book_form'
  writingsupport   TEXT, -- vocabularies.def = 'writing_support'
  leaftotextant    TEXT,
  fragtot          INTEGER,
  fragdim          TEXT,
  leaftotestimated INTEGER,
  quiresextant     INTEGER,
  gennotes         TEXT,
  columns          TEXT, -- vocabularies.def = 'columns'
  colnotes         TEXT,
  linespercolumn   INTEGER,
  charsperline     INTEGER,
  alignment        TEXT,  -- vocabularies.def = 'alignment'
  alignmentnotes   TEXT,
  leafw            INTEGER,
  leafh            TEXT,
  framew           TEXT,
  frameh           TEXT,
  intercolumnium   TEXT,
  marginup         TEXT,
  marginlow        TEXT,
  marginout        TEXT,
  marginin         TEXT,
  marginleft       TEXT,
  marginright      TEXT,
  heighttenlines   TEXT,
  prophw           INTEGER,
  propwt           TEXT,
  dimnotes         TEXT,
  quirenotes       TEXT,
  quiresig         INTEGER,  -- 1|0
  quiretype        TEXT,
  quireposition    TEXT, -- semi-colon-separated-values: vocabularies.def = 'position_in_page'
  quirenrnotes     TEXT,
  pagination       INTEGER,   -- 1|0
  pagtype          TEXT, -- semi-colon-separated-values: vocabularies.def = 'regular_irregular'
  pagposition      TEXT, -- semi-colon-separated-values: vocabularies.def = 'position_in_page'
  pagnote          TEXT,
  foliation        INTEGER,   -- 1|0
  foltype          TEXT, -- vocabularies.def = 'regular_irregular'
  folposition      TEXT, -- semi-colon-separated-values: vocabularies.def = 'position_in_page'
  folnotes         TEXT,
  handstot         INTEGER,
  lectionalsigns   TEXT, -- semi-colon-separated-values: vocabularies.def = 'lectional_signs'
  structuralsigns  TEXT,
  signsnotes       TEXT,
  abbreviations    TEXT,  -- semi-colon-separated-values: vocabularies.def = 'abbreviations'
  abbrnotes        TEXT,
  ruling           BOOLEAN, -- 1|0
  rulingtype       TEXT,  -- vocabularies.def = 'ruling_types'
  rulingtool       TEXT,  -- vocabularies.def = 'ruling_tool'
  pricking         BOOLEAN, -- 1|0
  rulingnotes      TEXT,
  leaftabs         BOOLEAN,
  leaftabsnotes    TEXT,
  kolleseis        INTEGER, -- 1|0
  kolleseseisdescr TEXT,
  tracesnotes      TEXT,
  kollemata        INTEGER,
  kollno           INTEGER,
  kolldim          TEXT,
  bindings         INTEGER,  -- 1|0
  sewings          INTEGER,  -- 1|0
  sewingtype       TEXT,
  covers           TEXT,  -- semi-colon-separated-values: vocabularies.def = 'covers'
  coversnotes      TEXT,
  holesno          INTEGER,
  holesarrangement TEXT, -- vocabularies.def = 'holes_arrangement'
  holesnotes       TEXT,
  marginalnotes    TEXT,
  palimpsest       BOOLEAN, -- 1|0
  palimpsestnotes  TEXT,
  restancient      TEXT,
  restmodern       TEXT,
  pgmcol           TEXT,  -- semi-colon-separated-values: vocabularies.def = 'pigment_colours'
  pgmlocation      TEXT,  -- semi-colon-separated-values: vocabularies.def = 'ink_location'
  pgmnotes         TEXT,
  blktype          TEXT,  -- semi-colon-separated-values: vocabularies.def = 'black_types'
  blklocation      TEXT,  -- semi-colon-separated-values: vocabularies.def = 'ink_location'
  blknotes         TEXT,
  inks             TEXT,
  redink           BOOLEAN,
    redinknotes      TEXT,
  inks             TEXT,  -- semi-colon-separated-values: vocabularies.def = 'ink_types'
  redink           BOOLEAN, -- 1|0
  redinknotes      TEXT,
  decortype        TEXT,  -- semi-colon-separated-values: vocabularies.def = 'decor_types'
  decorsubj        TEXT,  -- semi-colon-separated-values: vocabularies.def = 'decor_subj'
  decorationdescr  TEXT,
  enlargedinitials TEXT,
  sourceinfo       TEXT,
  editors          VARCHAR(255), -- semi-colon-separated-values: vocabularies.def = 'persons'
  status           VARCHAR(255) -- vocabularies.def = 'status'

);

);
```

## Links
- `manuscripts` >—< `biblio` ( via `m_biblio` [+ details])
- `manuscripts` —< `m_quires`
- `manuscripts` >—< `collections` (via `m_shelfmarks` [+ shelfmark, pp])
- `manuscripts` >—< `places` (via `paths__m_msplaces` [+ type, source info, source note])
- `manuscripts` >—< `works` (via `paths__userlinks`)
