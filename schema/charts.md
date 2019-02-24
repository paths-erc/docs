# Charts

## DDL

```sql
CREATE TABLE paths__charts (
    id      INTEGER  PRIMARY KEY NOT NULL,  -- primary key
    user_id INTEGER,
    name    TEXT,
    [query] TEXT,
    date    DATETIME
);
```
