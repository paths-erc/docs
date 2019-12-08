# Collections

## DDL

```sql
CREATE TABLE paths__collections (
  id          INTEGER PRIMARY KEY, -- primary key
  creator     TEXT, -- automatically filled by the RDBMS with the current user id
  fullname    TEXT,
  cmclname    TEXT,
  country     TEXT,
  town        TEXT,
  institution TEXT,
  name        TEXT,
  notes       TEXT,
  editors     TEXT, -- semi-colon-separated-values: vocabularies.def = 'persons'
  lastmodified TEXT
);
```

## Links
- `collections` >—< `biblio` (via `m_biblio` [+ details])
- `collections` >—< `manuscripts` ( via `m_shelfmarks` [+ shelfmark, pp])
