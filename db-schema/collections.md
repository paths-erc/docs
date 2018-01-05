# Collections

## DDL

```sql
CREATE TABLE paths__collections (
  id         INTEGER PRIMARY KEY, -- chiave primaria
  creator    TEXT, -- compilato dal sistema con l'utente attivo
  fullname    TEXT,
  cmclname    TEXT,
  country     TEXT,
  town        TEXT,
  institution TEXT,
  name        TEXT,
  notes       TEXT,
  editors    TEXT  -- scsv: vocabularies.def = 'persons'
);
```

## Links
- `collections` >—< `biblio` (via `m_biblio` [+ details])
- `collections` >—< `manuscripts` ( via `m_shelfmarks` [+ shelfmark, pp])
