# Bibliography

## DDL

```sql
CREATE TABLE paths__biblio (
  id         INTEGER PRIMARY KEY, -- primary key
  creator    TEXT, -- automatically filled by the RDBMS with the current user id
  short      TEXT,
  authors    TEXT,
  title      TEXT,
  journal    TEXT,
  volume     TEXT,
  issue      TEXT,
  voleditors TEXT,
  series     TEXT,
  year       TEXT,
  place      TEXT,
  pages      TEXT,
  isbn       TEXT,
  issn       TEXT,
  doi        TEXT,
  url        TEXT,
  notes      TEXT,
  worldcat   TEXT,
  editors    TEXT -- semi-colon-separated-values: vocabularies.def = 'persons'
);
```

## Links
- `biblio` >—<  `authors` (via `m_biblio` [+ details])
- `biblio` >—<  `collections` (via `m_biblio` [+ details])
- `biblio` >—<  `colophons` (via `m_biblio` [+ details])
- `biblio` >—<  `files` (via `m_biblio` [+ details])
- `biblio` >—<  `manuscripts` (via `m_biblio` [+ details])
- `biblio` >—<  `places` (via `m_biblio` [+ details])
- `biblio` >—<  `titles` (via `m_biblio` [+ details])
- `biblio` >—<  `works` (via `m_biblio` [+ details])
