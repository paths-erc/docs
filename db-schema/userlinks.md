# Userlinks

## DDL

```sql
CREATE TABLE paths__userlinks (
    id     INTEGER PRIMARY KEY NOT NULL,
    tb_one TEXT    NOT NULL,
    id_one INTEGER NOT NULL,
    tb_two TEXT    NOT NULL,
    id_two INTEGER NOT NULL,
    sort   INTEGER
);
```
