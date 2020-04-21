---
title: "Manual for the correct use and reading of the Places section of the PAThs database"
permalink: "/handbook/places"
---

A detailed technical description of database schema is published at [schema/places](../schema/places).

Ref.: `paths.places`

---

### Place identifiers

#### ID
- The unique stable identifier of each place. The identifier is a sequential integer provided by the database engine.
- DB id: `paths__places.id`

#### SITE NAME
- English ‘standard’ version of the most common toponym used in the scholarly literature
- DB id: `paths__places.name`

#### Trismegistos GeoID
- [Trismegistos GeoID](https://www.trismegistos.org/geo/index.php), if available
- DB id: `paths__places.tmgeo`

#### Pleiades Id
- [Pleiades](https://pleiades.stoa.org/places) Id, if available
- DB id: `paths__places.pleiades`

---

### Place names
For each place multiple instances of the following group of fields can be filed, each one describing a single toponym form.

These fields are not part of the [places table](/schema/places) but of the [m_toponyms table](/schema/m_toponyms).

#### LANGUAGE
- The language in which the toponym is expressed, e.g.: Egyptian, Greek, Latin, Coptic, Arabic and English.
- DB id: `paths__m_msplaces.language`

#### PLACE NAME
- The single toponym variant.
- DB id: `paths__m_msplaces.toponym`

#### TRANSCRIPTION
- Romanization of toponym variant. Only Arabic forms are being romanized, using the [DIN (Deutsches Institut für Normung) 31635 standard](https://en.wikipedia.org/wiki/DIN_31635).
- DB id: `paths__m_msplaces.transcription`

#### NOTES
- Possible notes for the toponym variant
- DB id: `paths__m_msplaces.notes`

#### SORT
- This field is used to manually order the single items.
- DB id: `paths__m_msplaces.sort`

---

### Current administrative position

#### REGION
- Egyptian macro regions as listed by Baines, J., Malek, J. 1980 (*Atlas of Ancient Egypt*. Oxford) with the exception of Thebes (divided in Western and Eastern Thebes) and the Fayyum region.
- DB id: `paths__places.region`

#### AREA
- A coherent modern area if available, eg. Valley of the Queens / Kings, etc.
- DB id: `paths__places.area`

---

### Ancient administrative position

#### NOME
- The pertinent Egyptian nome. The [Trismegistos’ list of the Egyptian nomes](https://www.trismegistos.org/geo/nomoi_lookup_nomoi.php?fieldname=Egyptian_Nomos&num=one), around 3rd Century CE is used.
- DB id: `paths__places.nomos`

#### Capital of nome
- True if the site is the capital of the pertinent nome, false otherwise.
- DB id: `paths__places.isnomoscapital`

#### PROVINCE
- The pertinent Diocletian province.
- DB id: `paths__places.province`

#### MERIS
- The pertinent Egyptian Fayyumic meris.
- DB id: `paths__places.meris`

---

### Religious administrative position

#### EPISCOPAL SEE
- If the site is documented to have been a bishopric or not.
- DB id: `paths__places.episcopalsee`

#### EPISCOPAL SEE FROM YEAR
- If known, the year from which the site is documented to have been a bishopric.
- DB id: `paths__places.episcopalseefrom`

#### NOTES ON EPISCOPAL SEE
- Sources or other notations on the episcopal see, if the site is documented to have been a bishopric.
- DB id: `paths__places.notesepiscopalsee`

---

### Chronology

#### DATE FROM
- The upper chronological limit expressed in years of the ‘Coptic’ phase of the site
- DB id: `paths__places.datefrom`

#### DATE TO
- The lower chronological limit expressed in years of the ‘Coptic’ phase of the site
- DB id: `paths__places.dateto`

#### DATING CRITERIA AND NOTES
- Detailed information on which the dating of the site is made.
- DB id: `paths__places.datingcriteria`

---

### Description

#### TYPOLOGY
- Site typologies has been shaped after (selected from) Pleiades’ Feature (or Place) Categories, with the addition of `hermitage unit(s)` and `castrum`.
- DB id: `paths__places.typology`

#### TOPOGRAPHICALLY REFERRED TO
- An already inserted place (internal reference) to which the current place is topographically linked. Only upwards relations must be recorded.
-DB id: `paths__places.toporeferredto`

#### NOTES ON TOPOGRAPHICAL REFERENCE
- Descriptive notes about the (upwards) topographical relation of the site.
- DB id: `paths__places.notestoporeferredto`

#### DOES THE SITE INCLUDE ANY MONASTERIES?
- True (1) if a site contains one or many monasteries, false (0) otherwise.
- DB id: `paths__places.hasmonastery`

#### NOTES ON MONASTERY
- Descriptive notes on the monastic nature of the site.
- DB id: `paths__places.monasterynotes`

#### HISTORICAL CONNECTIONS / REFERENCES
- Historical (textual) evidence of relations between two or more sites.
- DB id: `paths__places.historicalreference`

#### DESCRIPTION
- A detailed description of the site, limited to the 3rd-11th Centuries CE.
- DB id: `paths__places.description`

---

### Other periods
For each place multiple instances of the following group of fields can be filed, each one providing a short description of a specific phase.

These fields are not part of the [places table](/schema/places) but of the [m_placephase table](/schema/m_placephase).

#### PERIOD
- Specific chronological period, controlled by a vocabulary derived from [perio.do](http://perio.do/). The following items are so far implemented:
  - Predynastic Egypt (4500 BC - 2950 BC)
  - Early Dynastic Egypt (2950 BC - 2670 BC)
  - Old Kingdom Egypt (2670 BC - 2168 BC)
  - First Intermediate Period Egypt (2168 BC - 2010 BC)
  - Middle Kingdom Egypt (2010 BC - 1640 BC)
  - Second Intermediate Period Egypt (1640 BC - 1548 BC)
  - New Kingdom Egypt (1548 BC - 1086 BC)
  - Third Intermediate Period Egypt (1086 BC - 664 BC)
  - Late Period Egypt (664 BC - 332 BC)
  - Macedonian Egypt (332 BC - 304 BC)
  - Ptolemaic Egypt (304 BC - 30 BC)
  - Ptolemaic-Roman Egypt (304 BC - AD 640)
  - Roman, early Empire (30 BC - AD 300)
  - Late Antique (AD 300 - AD 640)
  - Early Byzantine (AD 650 - AD 850)
  - Middle Byzantine (AD 850 - AD 1200)
  - Late Byzantine Period (AD 1200 - AD 1450)
  - Early Ottoman Empire (AD 1453 - AD 1683)
  - Ottoman Empire (AD 1513 - AD 1918)
  - undefined.
- DB id: `paths__m_placephase.fperiod`

#### NOTES ON PERIOD
- Further verbose notes on the period
- DB id: `paths__m_placephase.fperiodnote`

#### TYPOLOGY
- Typology of the site in the specific period
- DB id: `paths__m_placephase.ftypology`

#### DESCRIPTION
- Full description of the site referring to the specific period
- DB id: `paths__m_placephase.fdescription`

---

### Editorial information

#### EDITORS
- Initials of the person(s) responsible for the record.
- DB id: `paths__places.editors`

#### STATUS
- If the record has been fully compiled the status is set to `complete`; if it is under study the status is set to `in-progress`. If the status is blank it means that the provided information are incomplete, not reliable and liable to change in the future.
- DB id: `paths__places.status`

#### LAST MODIFIED
- Date of last edit
- DB id: `paths__places.lastmodified`


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
- DB id: `paths__m_biblioimages`