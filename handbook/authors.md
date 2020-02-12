---
title: "Manual for the correct use and reading of the Authors section of PAThs database"
permalink: "/handbook/authors"
---

A detailed technical description of database schemais published at [schema/authors](../schema/authors).


Ref.: `paths.authors`

---

#### ID
- The unique stable identifier of each author. The identifier is a sequential integer provided by the database engine.
- DB id: `id`

#### NAME
- The english form of the name of the author
- DB id: `name`

#### NAME IN COPTIC
- The Coptic version of te name of the author
- DB id: `copticname`

#### NAME IN GREEK
- The Greek version of te name of the author
- DB id: `greekname`

#### VIAF ID
- The corrsponding identifier in the [Virtual International Authority File](http://viaf.org/)
- DB id: `viaf`

#### TITLE
- The possible title which traditionally is connected to the author, e.g.: archbishop, pope, archimandrite.
- DB id: `title`

#### CMCL NAME
- This is a legacy information not published on the Atlas. It stores the Italian form of the author’s name as recorded in the [CMCL database](http://www.cmcl.it/)
- DB id: `cmclname`

#### SHORT BIOGRAPHY OF THE “AUTHOR”
- A short biographical note of the author
- DB id: `bio`

#### YEAR OF BIRTH
- If known, the year of birth of the author
- DB id: `birth`

#### YEAR OF DEATH
- If known, the year of death of the author
- DB id: `death`

#### EPISCOPAL SEE
- If known the PATh Place where the author served as a bishop.
- DB id: `episcopalsee`


### Editorial information


#### EDITORS
- Initials of the person(s) responsible for the record.
- DB id: `editors`

#### STATUS
- If the record has been fully compiled the status is set to `complete`; if it is under study the status is set to `in-progress`. If the status is blank it means that the provided information are incomplete, not reliable and liable to change in the future.
- DB id: `status`

---

### Bibliography
For each place multiple instances of the following group of fields can be filed, each one describing a bibliographic reference.

These fields are not part of the [places table](../db-schema/places.md) but of the [m_biblio table](../db-schema/m_biblio.md).

#### SHORT REFERENCE
- Short reference of the bibliographic item as stored in [biblio table](biblio.md)
- DB id: `short`

#### SPECIFIC DETAILS
- Pages of the publication if not precised in the reference
- DB id: `details`

#### DETAILS ABOUT IMAGES
- Pages or figures containing reproductions of (part[s] of) the manuscript
- DB id: `images`

#### LAST MODIFIED
- date of last edit
- DB id: `lastmodified`
