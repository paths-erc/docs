# Files

## DDL

```sql
CREATE TABLE paths__files (
  id          INTEGER PRIMARY KEY, -- primary key
  creator     TEXT, -- automatically filled by the RDBMS with the current user id
  ext         TEXT,
  keywords    TEXT,
  description TEXT,
  printable   INTEGER,
  filename    TEXT
);
```

## Links
- `files` >—<  `authors` (via `userlinks`)
- `files` >—<  `biblio` (via `userlinks`)
- `files` >—<  `collections` (via `userlinks`)
- `files` >—<  `colophons` (via `userlinks`)
- `files` >—<  `manuscripts` (via `userlinks`)
- `files` >—<  `places` (via `userlinks`)
- `files` >—<  `titles` (via `userlinks`)
- `files` >—<  `works` (via `userlinks`)
