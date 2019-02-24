# Queries

## DDL

```sql
CREATE TABLE paths__queries (
    id        INTEGER PRIMARY KEY,
    user_id   INTEGER,
    date      DATE,
    name      TEXT,
    text      TEXT,
    [table]   TEXT,
    is_global INTEGER
);

```
