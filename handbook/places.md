---
title: "Manual for the correct use and reading of the Places section of PAThs database"
permalink: "/handbook/places"
---



This subfolder of PAThs’ main documentation repository provides a complete
documentation for users and readers of the PAThs database, currently available at
http://db.bradypus.net. The documentation is written in [Markdown](https://daringfireball.net/projects/markdown/)
by the PAThs' team (Julian Bogdani) and is available in PDF format in
[PAThs’ website](http://paths.uniroma1.it).

If you are looking for the schema description please go to [db-schema/README.md](../db-schema/README.md).



Ref.: `paths.places`

---

### Place identifiers

#### ID
- The unique stable identifier of each place. The identifier is a sequential integer provided by the database engine.
- DB id: `id`

#### SITE NAME
- English ‘standard’ version of the most common toponym used in the scholarly literature
- DB id: `name`

#### Trismegistos GeoID
- [Trismegistos GeoID](https://www.trismegistos.org/geo/index.php), if available
- DB id: `tm`

#### Pleiades Id
- [Pleiades](https://pleiades.stoa.org/places) Id, if available
- DB id: `pleiades`

#### Timm references
**The use of this field has been deprecated in favour of the Bibliography field group**
~~- Bibliografical reference to Timm, S. 1984-1992. *Das christlich-koptische Ägypten in arabischer Zeit. Eine Sammlung christlicher Stätten in Ägypten in arabischer Zeit, unter Ausschluss von Alexandria, Kairo, des Apa-Mena-Klosters (Dēr Abū Mina), der Skētis (Wādi n-Naṭrūn) und der Sinai-Region*. Wiesbaden.~~
~~- DB id: `timm`~~

---

### Place names
For each place multiple instances of the following group of fields can be filed, each one describing a single toponym form.

These fields are not part of the [places table](../db-schema/places.md) but of the [m_toponyms table](../db-schema/m_toponyms.md).

#### LANGUAGE
- The language in which the toponym is expressed, e.g.: Egyptian, Greek, Latin, Coptic, Arabic and English.
- DB id: `language`

#### PLACE NAME
- The single toponym variant.
- DB id: `toponym`

#### TRANSCRIPTION
- Romanization of toponym variant. Only Arabic forms are being romanized, using the [DIN (Deutsches Institut für Normung) 31635 standard](https://en.wikipedia.org/wiki/DIN_31635).
- DB id: `transcription`

#### NOTES
- Possible notes for the toponym variant
- DB id: `notes`

#### SORT
- This field is used to manually order the single items.
- DB id: `sort`

---

### Current administrative position

#### REGION
- Egyptian macro regions as listed by Baines, J., Malek, J. 1980 (*Atlas of Ancient Egypt*. Oxford) with the exception of Thebes (divided in Western and Eastern Thebes) and the Fayyum region.
- DB id: `region`

#### AREA
- A coherent modern area if available, eg. Valley of the Queens / Kings, etc.
- DB id: `area`

---

### Ancient administrative position

#### NOME
- The pertinent Egyptian nome. The [Trismegistos’ list of the Egyptian nomes](https://www.trismegistos.org/geo/nomoi_lookup_nomoi.php?fieldname=Egyptian_Nomos&num=one), around 3rd Century CE is used.
- DB id: `nomos`

#### Capital of nome
- True if the site is the capital of the pertinent nome, false otherwise.
- DB id: `isnomoscapital`

#### PROVINCE
- The pertinent Diocletian province.
- DB id: `province`

#### MERIS
- The pertinent Egyptian Fayyumic meris.
- DB id: `meris`

---

### Religious administrative position

#### EPISCOPAL SEE
- If the site is documented to have been a bishopric or not.
- DB id: `episcopalsee`

#### EPISCOPAL SEE FROM YEAR
- If known, the year from which the site is documented to have been a bishopric.
- DB id: `episcopalseefrom`

#### NOTES ON EPISCOPAL SEE
- Sources or other notations on the episcopal see, if the site is documented to have been a bishopric.
- DB id: `notesepiscopalsee`

---

### Chronology

#### DATE FROM
- The upper chronological limit expressed in years of the ‘Coptic’ phase of the site
- DB id: `datefrom`

#### DATE TO
- The lower chronological limit expressed in years of the ‘Coptic’ phase of the site
- DB id: `dateto`

#### DATING CRITERIA AND NOTES
- Detailed information on which the dating of the site is made.
- DB id: `datingcriteria`

---

### Description

#### TYPOLOGY
- Site typologies has been shaped after (selected from) Pleiades’ Feature (or Place) Categories, with the addition of `hermitage unit(s)` and `castrum`.
- DB id: `typology`

#### TOPOGRAPHICALLY REFERRED TO
- An already inserted place (internal reference) to which the current place is topographically linked. Only upwards relations must be recorded.
-DB id: `toporeferredto`

#### NOTES ON TOPOGRAPHICAL REFERENCE
- Descriptive notes about the (upwards) topographical relation of the site.
- DB id: `notestoporeferredto`

#### DOES THE SITE INCLUDE ANY MONASTERIES?
- True (1) if a site contains one or many monasteries, false (0) otherwise.
- DB id: `Does the site include any monasteries?`

#### NOTES ON MONASTERY
- Descriptive notes on the monastic nature of the site.
- DB id: `monasterynotes`

#### HISTORICAL CONNECTIONS / REFERENCES
- Historical (textual) evidence of relations between two or more sites.
- DB id: `historicalreference`

#### DESCRIPTION
- A detailed description of the site, limited to the 3rd-11th Centuries CE.
- DB id: `description`

---

### Other periods
For each place multiple instances of the following group of fields can be filed, each one providing a short description of a specific phase.

These fields are not part of the [places table](../db-schema/places.md) but of the [m_placephase table](../db-schema/m_placephase.md).

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
- DB id: `phperiod`

#### NOTES ON PERIOD
- Further verbose notes on the period
- DB id: `phperiodnote`

#### TYPOLOGY
- Typology of the site in the specific period
- DB id: `phtypology`

#### DESCRIPTION
- Full description of the site referring to the specific period
- DB id: `phdescription`

---

### Editorial information

**Deprecated**  
~~- Field reserved for internal use~~
~~- DB id: `hasplans`~~

**Deprecated**  
~~- Field reserved for internal use~~
~~- DB id: `hasphotos`~~

**Deprecated**  
~~- Field reserved for internal use~~
~~- DB id: `accuracy`~~

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
