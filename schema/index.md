---
title: "PAThs database schema documentation"
layout: default
permalink: /schema/
---

This section of PAThs’ documentation repository provides a complete
documentation of PAThs database schema, currently implemented at
http://db.bradypus.net.

If you are looking for the user & reader guide please [follow this link](/handbook/).

The current database engine used by PAThs is [Sqlite](https://www.sqlite.org/),
«a self-contained, high-reliability, embedded, full-featured, public-domain,
SQL database engine. SQLite is the most used database engine in the world» (https://www.sqlite.org).
The [DDL](https://en.wikipedia.org/wiki/Data_definition_language)
describing each table is standard SQL and will work—with minor changes—with other database engines, like
[MySQL](https://www.mysql.com/), [PostgreSQL](https://www.postgresql.org/), etc.

---

## Table of contents

- [The database managing system](dbms)
- Table list
  1. [Manuscripts](manuscripts)
  1. [Collections](collections)
  1. [Works](works)
  1. [Titles](titles)
  1. [Colophons](colophons)
  1. [Authors](authors)
  1. [Places](places)
  1. [Persons](persons)
  1. [Bibliographic database](biblio)

- Auxiliary tables
  1. [m_biblio](m_biblio)
  1. [m_hands](m_hands)
  1. [m_msplaces](m_msplaces)
  1. [m_placephase](m_placephase)
  1. [m_quires](m_quires)
  1. [m_shelfmarks](m_shelfmarks)
  1. [m_toponyms](m_toponyms)
  1. [m_nameforms](m_nameforms)
  1. [m_wkauthors](m_wkauthors)

- System tables
  1. [Files](files)
  1. [Charts](charts)
  1. [Queries](queries)
  1. [Rs](rs)
  1. [Userlinks](userlinks)
  1. [Vocabularies](vocabularies)
