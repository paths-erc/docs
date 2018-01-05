# Manuscripts

## DDL
```sql
CREATE TABLE paths__manuscripts (
  id               INTEGER PRIMARY KEY, -- chiave primaria
  creator          TEXT, -- compilato dal sistema con l'utente attivo
  cmclid           TEXT,
  tm               TEXT,
  ldab             TEXT,
  lcbm             TEXT,
  alias            TEXT,
  issinglefrag     TEXT, -- 1|0
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
  leafw            TEXT,
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
  prophw           TEXT,
  propwuw          TEXT,
  dimnotes         TEXT,
  quirenotes       TEXT,
  quiresig         INTEGER,  -- 1|0
  quiretype        TEXT,
  quireposition    TEXT, -- smsv vocabularies.def = 'position_in_page'
  quirenrnotes     TEXT,
  pagination       INTEGER,   -- 1|0
  pagtype          TEXT, -- smsv vocabularies.def = 'regular_irregular'
  pagposition      TEXT, -- smsv vocabularies.def = 'position_in_page'
  pagnote          TEXT,
  foliation        INTEGER,   -- 1|0
  foltype          TEXT, -- vocabularies.def = 'regular_irregular'
  folposition      TEXT, -- smsv vocabularies.def = 'position_in_page'
  folnotes         TEXT,
  modulartypology  TEXT, -- vocabularies.def = 'modular_typology'
  writingaxis      TEXT, -- vocabularies.def = 'axis'
  thickandthin     BOOLEAN, -- 1|0
  typeofeos        TEXT, -- vocabularies.def = 'type_of_eos'
  typeofm          TEXT, -- vocabularies.def = 'type_of_m'
  typeofr          TEXT, -- vocabularies.def = 'type_of_r'
  typeofy          TEXT, -- vocabularies.def = 'type_of_r'
  typeoff          TEXT, -- vocabularies.def = 'type_of_r'
  writingnotes     TEXT,
  lectionalsigns   TEXT, -- smsv vocabularies.def = 'lectional_signs'
  structuralsigns  TEXT,
  signsnotes       TEXT,
  abbreviations    TEXT,  -- smsv vocabularies.def = 'abbreviations'
  abbrnotes        TEXT,
  ruling           BOOLEAN, -- 1|0
  rulingtype       TEXT,  -- vocabularies.def = 'ruling_types'
  rulingtool       TEXT,  -- vocabularies.def = 'ruling_tool'
  pricking         BOOLEAN, -- 1|0
  rulingnotes      TEXT,
  leaftabs         TEXT,
  kolleseis        INTEGER, -- 1|0
  kolleseseisdescr TEXT,
  tracesnotes      TEXT,
  kollemata        INTEGER,
  kollno           INTEGER,
  kolldim          TEXT,
  bindings         INTEGER,  -- 1|0
  sewings          INTEGER,  -- 1|0
  sewingtype       TEXT,
  covers           TEXT,  -- smsv vocabularies.def = 'covers'
  coversnotes      TEXT,
  holesno          INTEGER,
  holesarrangement TEXT, -- vocabularies.def = 'holes_arrangement'
  holesnotes       TEXT,
  changeofhand     TEXT,
  marginalnotes    TEXT,
  palimpsest       BOOLEAN, -- 1|0
  palimpsestnotes  TEXT,
  restancient      TEXT,
  restmodern       TEXT,
  inks             TEXT,  -- smsv vocabularies.def = 'ink_types'
  redink           BOOLEAN, -- 1|0
  redinknotes      TEXT,
  decortype        TEXT,  -- smsv vocabularies.def = 'decor_types'
  decorsubj        TEXT,  -- smsv vocabularies.def = 'decor_subj'
  decorationdescr  TEXT,
  enlargedinitials TEXT,
  sourceinfo       TEXT,
  editors          TEXT   -- scsv: vocabularies.def = 'persons'
);

);
```

## Links
- `manuscripts` >—< `biblio` ( via `m_biblio` [+ details])
- `manuscripts` —< `m_quires`
- `manuscripts` >—< `collections` (via `m_shelfmarks` [+ shelfmark, pp])
- `manuscripts` >—< `places` (via `paths__m_msplaces` [+ type, source info, source note])
- `manuscripts` >—< `works` (via `paths__userlinks`)