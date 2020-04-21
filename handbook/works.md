---
title: "Manual for the correct use and reading of the Works section of PAThs database"
permalink: "/handbook/works"
---

A detailed technical description of database schema is published at [schema/works](../schema/works).


Ref.: `paths.works`

---

#### ID
- The unique stable identifier of each work. The identifier is a sequential integer provided by the database engine. 
This field id not available to public.
- DB id: `paths__works.id`

### Work identifiers

#### CLAVIS COPTICA
- The Clavis Coptica  as provided by [CMCL](http://cmcl.it/)
- DB id: `paths__works.cmcl`

#### CONVENTIONAL TITLE
- The conventional title or titles (separated by semicolon) of the work
- DB id: `paths__works.title`

#### CPG
- The corresponding Clavis Patrum Graecorum identifier
- DB id: `paths__works.cpg`

#### CANT
- The corresponding Clavis Apocryphorum Novi Testamenti identifier
- DB id: `paths__works.cant`

#### CAVT
- The corresponding Clavis Apocryphorum Veteris Testamenti identifier
- DB id: `paths__works.cavt`

#### BHO
- The corresponding Bibliotheca Hagiographica Orientalis identifier
- DB id: `paths__works.bho`

#### BHG
- The corresponding Bibliotheca Hagiographica Graeca identifier
- DB id: `paths__works.bhg`

#### BHL
- The corresponding Bibliotheca Hagiographica Latina identifier
- DB id: `paths__works.bhl`

#### CAe
- The corresponding Clavis Aethiopica identifier
- DB id: `paths__works.cae`

### Description

#### NOTES
- General descriptive notes on the work
- DB id: `paths__works.notes`

#### LITPERIOD
- A provisional periodisation system, object of further amendments and changes. The updated list is available at [https://atlas.paths-erc.eu/works](https://atlas.paths-erc.eu/works)
- DB id: `paths__works.litperiod`

### Editorial information

#### EDITORS
- Initials of the person(s) responsible for the record.
- DB id: `paths__works.editors`

#### STATUS
- If the record has been fully compiled the status is set to `complete`; if it is under study the status is set to `in-progress`. If the status is blank it means that the provided information are incomplete, not reliable and liable to change in the future.
- DB id: `paths__works.status`

#### LAST MODIFIED
- Date of last edit
- DB id: `paths__works.lastmodified`


---

### Authorship

#### AUTHOR TYPE
- The type of the author; can be `stated`, i.e. an author to which a work is attributed in the Coptic manuscript tradition; `creator`, i.e.
Work’s Creator: actual and original author of the work in its original language, either Greek or Coptic
- DB id: `paths__m_wkauthors.type`

#### AUTHOR NAME
- Reference to the autor id, as stored in [authors](authors)
- DB id: `paths__m_wkauthors.author`

#### SOURCE OF INFORMATION
- The source of information for the attribution of the author. Can be: `Tradition / other works`, `title`, `colophon`, or `contents`
- DB id: `paths__m_wkauthors.source`

#### NOTES ON AUTHORSHIP
- Possible notes describing or explaining the author attribution
- DB id: `paths__m_wkauthors.notes`

---

### Bibliography
For each place multiple instances of the following group of fields can be filed, each one describing a bibliographic reference.

These fields are not part of the [places table](/schema/places) but of the [m_biblio table](/schema/m_biblio).

#### SHORT REFERENCE
- Short reference of the bibliographic item as stored in [biblio table](biblio)
- DB id: `paths__m_biblio.short`

#### SPECIFIC DETAILS
- Pages of the publication if not precised in the reference
- DB id: `paths__m_biblio.details`

#### DETAILS ABOUT IMAGES
- Pages or figures containing reproductions of (part[s] of) the manuscript
- DB id: `paths__m_biblio.images`

