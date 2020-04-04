---
title: "Manual for the correct use and reading of the Persons attested in colophons section of PAThs database"
permalink: "/handbook/persons"
---

A detailed technical description of database schema is published at [schema/persons](../schema/persons).


Ref.: `paths.persons`

---

#### ID
- The unique stable identifier of each Person. The identifier is a sequential integer provided by the database engine. 
This field id not available to public.
- DB id: `paths__persons.id`

#### CREATOR
- Reference to the user who created the record 
This field id not available to public.
- DB id: `paths__persons.creator`

#### NAME
- The Coptic Literaty Manuscript id where the Person name is found
- DB id: `paths__persons.name`

#### Type
- Type of the Person:  `copyist`, `commemorated person`, `donor`, `decorator`, `restorer`, deliverer`, `founder of sacred building`, `sponsor`, `reader, `eponym`
- DB id: `paths__persons.type`

#### Profession / Rank
- “Profession” of the Person:  `Administrator`, `Anchorite / Ascetic`, `Archabbas`, `Archbishop`, `Archdeacon`, `Archimandrite`, `Archkyrios`, `Archōn`, `Archpresbyter`, `Archreader`, `Attendant`, `Bishop`, `Cantor`, `Cleric`, `Coenobiarch`, `Copyist / Calligrapher`, `Crucifer`, `Deacon / Deuteros deacon`, `Deuterarios`, `Dioikētēs`, `Grammateus`, `Higumenos`, `Kyrios / Sir`, `Leitourgos`, Monk`, `Nauklēros`, `Lector`, `Subdeacon`, `Superior / proestōs`, `Syngrapheus`, `Teacher`, `Presbyter`
- DB id: `paths__persons.profession`

#### CARNAL SON OF
- Carnal patronymic
- DB id: `paths__persons.patronymiccarnal`

#### SPIRITUAL SON OF
- Carnal patronymic
- DB id: `paths__persons.patronymicspirit`

#### CARNAL OR SPIRITUAL BROTHER OF
- Name of the carnal or spiritual brother
- DB id: `paths__persons.hasbrother`

#### CARNAL OR SPIRITUAL FATHER OF
- Name of the carnal or spiritual son
- DB id: `paths__persons.hasfather`

#### PLACE OF BIRTH
- PAThs place where the Person was born
- DB id: `paths__persons.placebirth`

#### AFFILIATION TO
- PAThs place to which the Person was affiliated
- DB id: `paths__persons.placeaffiliation`

#### SEX
- PAThs place to which the Person was affiliated
- DB id: `paths__persons.sex`

#### DATE FROM
- The upper chronological limit expressed in years of the ‘Coptic’ phase of the site
- DB id: `paths__persons.datefrom`

#### DATE TO
- The lower chronological limit expressed in years of the ‘Coptic’ phase of the site
- DB id: `paths__persons.dateto`

#### NOTES
- General notes
- DB id: `paths__persons.notes`

#### EDITORS
- Initials of the person(s) responsible for the record.
- DB id: `paths__persons.editors`

#### STATUS
- If the record has been fully compiled the status is set to `complete`; if it is under study the status is set to `in-progress`. If the status is blank it means that the provided information are incomplete, not reliable and liable to change in the future.
- DB id: `paths__persons.status`

#### LAST MODIFIED
- Date of last edit
- DB id: `paths__persons.lastmodified`

---

### Other name form attestations

For each Person manu variants of the name might be available

These fields are not part of the [persons table](/schema/persons) but of the [m_nameforms table](/schema/m_nameforms).

#### NAME FORM
- Original variant of the Person's name, as found il the Colophon
- DB id: `paths__m_nameforms.nameform`

#### LANGUAGE
- Language of the name form, `Coptic` or `Greek`
- DB id: `paths__m_nameforms.language`

#### TRANSLITERATION
- Romanisation of the name variant
- DB id: `paths__m_nameforms.transliteration`

---

### Bibliography
For each Person multiple instances of the following group of fields can be filed, each one describing a bibliographic reference.

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

