# PAThs database schema documentation

This subfolder of PAThs’ main documentation repository provides a complete
documentation of the PAThs database, currently available at
http://db.bradypus.net. The documentation is written in [Markdown](https://daringfireball.net/projects/markdown/)
by the PAThs' team (Julian Bogdani) and is available in PDF format in
[PAThs’ website](http://paths.uniroma1.it).

The current database engine used by PAThs is [Sqlite](https://www.sqlite.org/),
«a self-contained, high-reliability, embedded, full-featured, public-domain,
SQL database engine. SQLite is the most used database engine in the world» (https://www.sqlite.org). The [DDL](https://en.wikipedia.org/wiki/Data_definition_language)
describing each table is standard SQL and will work with other database engines, like
[MySQL](https://www.mysql.com/), [PostgreSQL](https://www.postgresql.org/), etc.

---

## Table of contents

1. [The database managing system](dbms.md)
1. Data structure (database model)

  1. [`Manuscripts` table](manuscripts.md)
  1. [`Collections` table](collections.md)
  1. [`Works` table](works.md)
  1. [`Authors` table](authors.md)
  1. [`Places` table](places.md)
  1. [`Bibliographic database` table](biblio.md)
  1. [`Files` table](files.md)
