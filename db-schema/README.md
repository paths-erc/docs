# PAThs database schema documentation

This subfolder of PAThs’ main documentation repository provides a complete
documentation of the PAThs database, currently available at
http://db.bradypus.net. The documentation is written in [Markdown](https://daringfireball.net/projects/markdown/)
by the PAThs' team (Julian Bogdani) and is available in PDF format in
[PAThs’ website](http://paths.uniroma1.it).

The current database engine used by PAThs is [Sqlite](https://www.sqlite.org/),
«a self-contained, high-reliability, embedded, full-featured, public-domain,
SQL database engine. SQLite is the most used database engine in the world» (https://www.sqlite.org). The [DDL](https://en.wikipedia.org/wiki/Data_definition_language)
describing each table is standard SQL and will work—with minor changes—with other database engines, like
[MySQL](https://www.mysql.com/), [PostgreSQL](https://www.postgresql.org/), etc.

---

## Table of contents

- [The database managing system](dbms.md)
- Table list
  1. [Manuscripts](manuscripts.md)
  1. [Collections](collections.md)
  1. [Works](works.md)
  1. [Titles](titles.md)
  1. [Colophons](colophons.md)
  1. [Authors](authors.md)
  1. [Places](places.md)
  1. [Bibliographic database](biblio.md)

- Auxiliary tables
  1. [m_biblio](m_biblio.md)
  1. [m_msplaces](m_msplaces.md)
  1. [m_placephase](m_placephase.md)
  1. [m_quires](m_quires.md)
  1. [m_shelfmarks](m_shelfmarks.md)
  1. [m_toponyms](m_toponyms)
  1. [m_wkauthors](m_wkauthors)

- System tables
  1. [Files](files.md)
  1. [Charts](charts.md)
  1. [Queries](queries.md)
  1. [Rs](rs.md)
  1. [Userlinks](userlinks.md)
  1. [Vocabularies](vocabularies.md)
