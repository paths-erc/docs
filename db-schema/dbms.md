# PAThs' database managing system

This document lists a verbose description of the relationship of the different entities of the database, which are:
- Manuscripts
- Collections
- Works
- Titles
- Colophons
- Authors
- Places
- Bibliographic database
- Files

### Manuscripts

- A `Manuscript` (ie. *Codicological Unit*) is composed by **one or many** fragments, identified by a `Collection` name, a `Shelfmark number` and eventually by page numbers

- A `Manuscript` is linked to **zero, one or many** `Places`; for each connection a type (*production*, *storage* or *discovery*) must be specified

- A `Manuscript` is made up of **one or many** quires.

- A `Manuscript` is linked to **zero, one or many** `Bibliographical records`

- A `Manuscript` is linked to **zero, one or many** `Works`

- A `Manuscript` contains **zero, one or many** `Titles`

- A `Manuscript` contains **zero, one or many** `Colophons`

- A `Manuscript` can be linked to **zero, one or many** `Files`

---

### Collections

- A `Collection` is linked to **zero, one or many** `Bibliographical records`

- A `Collection` can be linked to **zero, one or many** `Files`

---

### Works

- A `Work` is linked to **zero, one or many** `Bibliographical records`

- A `Work` is written by **zero, one or many** `Authors`; for each connection an authorship type (*stated*, *creator* or *master*) must be specified

- A `Work` can be paired by **zero, one or many** `Titles`

- A `Work` can be linked to **zero, one or many** `Files`

- (A `Works` is contained in **one or many** `Manuscripts`)

---

### Titles

- A `Title` is linked to **zero, one or many** `Bibliographical records`

- A `Title` is contained in **one or many** fragments, identified by a `Collection` name, a `Shelfmark number` and eventually by page numbers.

- A `Title` can be linked to **zero, one or many** `Files`

- (A `Title` is contained in **one** `Manuscript`)

---

### Colophons

- A `Colophon` is linked to **zero, one or many** `Bibliographical records`

- A `Colophon` is contained in **one or many** fragments, identified by a `Collection` name, a `Shelfmark number` and eventually by page numbers

- A `Colophon` can be linked to **zero, one or many** `Files`

- (A `Colophon` is contained in **one** `Manuscript`)

---

### Places

- A `Place` is linked to **zero, one or many** `Bibliographical records`

- A `Place` can have **one or many** `Chronological phases`

- A `Place` can be linked to **zero, one or many** `Files`

- A `Place` have **one or many** `Geodata`

- (A `Place` can be linked to **zero, one or many** `Manuscripts`)

- [A `Place` can have **one or many** `Toponyms`]

---

### Bibliographic record

- (A `Bibliographic record` can be linked to **zero, one or many** `Manuscripts`)

- (A `Bibliographic record` can be linked to **zero, one or many** `Collections`)

- (A `Bibliographic record` can be linked to **zero, one or many** `Works`)

- (A `Bibliographic record` can be linked to **zero, one or many** `Titles`)

- (A `Bibliographic record` can be linked to **zero, one or many** `Colophons`)

- (A `Bibliographic record` can be linked to **zero, one or many** `Places`)

- (A `Bibliographic record` can be linked to **zero, one or many** `Files`)

---

### Files

- (A `File` can be linked to **zero, one or many** `Manuscripts`)

- (A `File` can be linked to **zero, one or many** `Collections`)

- (A `File` can be linked to **zero, one or many** `Works`)

- (A `File` can be linked to **zero, one or many** `Titles`)

- (A `File` can be linked to **zero, one or many** `Colophons`)

- (A `File` can be linked to **zero, one or many** `Places`)

- (A `File` can be linked to **zero, one or many** `Bibliographic record`)
