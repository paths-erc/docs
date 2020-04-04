---
title: "Manual for the correct use and reading of the Colophons section of PAThs database"
permalink: "/handbook/colophons"
---

A detailed technical description of database schema is published at [schema/colophons](../schema/colophons).


Ref.: `paths.colophons`

---

#### ID
- The unique stable identifier of each Colophon. The identifier is a sequential integer provided by the database engine. 
This field id not available to public.
- DB id: `paths__colophons.id`

#### CREATOR
- Reference to the user who created the record 
This field id not available to public.
- DB id: `paths__colophons.creator`

#### CLM
- The Coptic Literaty Manuscript id where the Colophon is found
- DB id: `paths__colophons.msid`

#### DATE FROM
- The upper chronological limit expressed in years of the ‘Coptic’ phase of the site
- DB id: `paths__colophons.datefrom`

#### DATE TO
- The lower chronological limit expressed in years of the ‘Coptic’ phase of the site
- DB id: `paths__colophons.dateto`

#### DATING CRITERIA
- Detailed information on which the dating of the site is made.
- DB id: `paths__colophons.datingcriteria`

#### DONATED TO ISTITUTION
- Name of the institution where the Colophon was donated
- DB id: `paths__colophons.donationistitution`

#### PLACE OF ISTITUTION
- PAThs Place where the institution of donation was located
- DB id: `paths__colophons.istitutionplace`

#### DIALECTS
- Indication of the dialect(s) or language(s) used in the manuscript, according to the *sigla* of the *Kasser-Funk system* (see R. Kasser, *A Standard System of Sigla for Referring to the Dialects of Coptic*, in Journal of Coptic Studies 1 [1990], 141-151).
- DB id: `paths__colophons.dialect`

#### NOTES ON DIALECTS
- Special characteristics of the dialect. Bibliographical reference only for minor dialects.
- DB id: `paths__colophons.dialectnotes`

#### GREEK TEXT
- Indication if text in Greek is present in the Colophon
- DB id: `paths__colophons.greektext`

#### AXIS
- Axis of the writing (upright/right-sloping).
- DB id: `paths__colophons.writingaxis`

#### THICK-AND-THIN STYLE
- Noted if present.
- DB id: `paths__colophons.thickandthin`

#### CRYPTOGRAPHY
- Indication if cryptography is used in the Colophon
- DB id: `paths__colophons.cryptography`

#### COPTIC MINUSCULE SCRIPT
- Indication if Coptic minuscule script is used in the Colophon
- DB id: `paths__colophons.minusculecopitc`

#### GREEK MINUSCULE SCRIPT
- Indication if Greek minuscule script is used in the Colophon
- DB id: `paths__colophons.minusculegreek`

#### DESCRIPTION
- A verbous description of the Colophon
- DB id: `paths__colophons.description`

#### TEXT
- Transcription of the text in Coptic
- DB id: `paths__colophons.text`

#### TRANSLATION
- English translation of the Coptic text
- DB id: `paths__colophons.translation`

#### TAGGED TEXT
- Marked-up version of the Coptic text
- DB id: `paths__colophons.taggedtext`

#### EDITORS
- Initials of the person(s) responsible for the record.
- DB id: `paths__colophons.editors`

#### STATUS
- If the record has been fully compiled the status is set to `complete`; if it is under study the status is set to `in-progress`. If the status is blank it means that the provided information are incomplete, not reliable and liable to change in the future.
- DB id: `paths__colophons.status`

#### LAST MODIFIED
- Date of last edit
- DB id: `paths__colophons.lastmodified`

---

### Bibliography
For each Colophon multiple instances of the following group of fields can be filed, each one describing a bibliographic reference.

These fields are not part of the [colophons table](/schema/colophons) but of the [m_biblio table](/schema/m_biblio).

#### SHORT REFERENCE
- Short reference of the bibliographic item as stored in [biblio table](biblio)
- DB id: `paths__m_biblio.short`

#### SPECIFIC DETAILS
- Pages of the publication if not precised in the reference
- DB id: `paths__m_biblio.details`

#### DETAILS ABOUT IMAGES
- Pages or figures containing reproductions of (part[s] of) the manuscript
- DB id: `paths__m_biblio.images`

