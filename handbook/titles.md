---
title: "Manual for the correct use and reading of the Titles section of PAThs database"
permalink: "/handbook/titles"
---

A detailed technical description of database schema is published at [schema/titles](../schema/titles).


Ref.: `paths.titles`

---

#### ID
- The unique stable identifier of each title. The identifier is a sequential integer provided by the database engine. 
This field id not available to public.
- DB id: `paths__titles.id`

#### CREATOR
- Reference to the user who created the record 
This field id not available to public.
- DB id: `paths__titles.creator`

#### CLAVIS COPTICA ATTRIBUTED TO THE TITLE
- Each title is identified by a specific *Clavis Coptica*, composed of a 4-digit number preceded by a T (to distinguish it from a Clavis Coptica attributed to Works) and followed by a suffix, clearly marking it as a final title or subscriptio (-S), an initial title or inscriptio (-I), a section heading (-SH), a running title (-R), a general title (-G), a general final title (-GS) or a general initial title (-GI).
- DB id: `paths__titles.cc`

#### CLAVIS COPTICA ATTRIBUTED TO THE WORK
- The *Clavic Coptica* of the work accompanied bu the Title
- DB id: `paths__titles.workcc`

#### CLM
- The Coptic Literaty Manuscript id where the Title is found
- DB id: `paths__titles.msid`

#### TYPE
- Type of the Title, can be `initial`, `final`, `section heading`, `running`, `initial general`, `final general` or `general`
- DB id: `paths__titles.type`

#### DESCRIPTION
- A verbous description of the Title
- DB id: `paths__titles.description`

#### MODULAR TYPOLOGY
- In unimodular writing, the letters all fit in the same shape, usually a square. In bimodular writing, there is an opposition between wide letters and narrower ones (usually ⲉ, ⲑ, ⲟ, ⲥ).
- DB id: `paths__titles.modulartypology`

#### AXIS
- Axis of the writing (upright/right-sloping).
- DB id: `paths__titles.writingaxis`

#### THICK-AND-THIN STYLE
- Noted if present.
- DB id: `paths__titles.thickandthin`

#### TEXT
- Transcription of the text in Coptic
- DB id: `paths__titles.text`

#### TRANSLATION
- English translation of the Coptic text
- DB id: `paths__titles.translation`

#### TAGGED TEXT
- Marked-up version of the Coptic text
- DB id: `paths__titles.taggedtext`

#### EDITORS
- Initials of the person(s) responsible for the record.
- DB id: `paths__titles.editors`

#### STATUS
- If the record has been fully compiled the status is set to `complete`; if it is under study the status is set to `in-progress`. If the status is blank it means that the provided information are incomplete, not reliable and liable to change in the future.
- DB id: `paths__titles.status`

#### LAST MODIFIED
- Date of last edit
- DB id: `paths__titles.lastmodified`

---

### Bibliography
For each Title multiple instances of the following group of fields can be filed, each one describing a bibliographic reference.

These fields are not part of the [titles table](/schema/titles) but of the [m_biblio table](/schema/m_biblio).

#### SHORT REFERENCE
- Short reference of the bibliographic item as stored in [biblio table](biblio)
- DB id: `paths__m_biblio.short`

#### SPECIFIC DETAILS
- Pages of the publication if not precised in the reference
- DB id: `paths__m_biblio.details`

#### DETAILS ABOUT IMAGES
- Pages or figures containing reproductions of (part[s] of) the manuscript
- DB id: `paths__m_biblio.images`

